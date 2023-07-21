/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Autoplay, Navigation } from "swiper/modules";
import ReactPlayer from "react-player";
import connexion from "../../services/connexion";
import "./Swiper.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function VideosSwiper() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const videosData = await connexion.get("/videos");
      setVideos(videosData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="player-wrapper">
      <Swiper
        className="Header-Swiper"
        spaceBetween={20}
        slidesPerView={1}
        effect="effect-fade"
        grabCursor
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination, Navigation, Autoplay, EffectFlip]}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <ReactPlayer
              className="react-player"
              url={video.url}
              width="100%"
              heigth="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VideosSwiper;
