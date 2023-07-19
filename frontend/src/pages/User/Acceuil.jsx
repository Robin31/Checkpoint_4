import React from "react";
import Swiper from "../../components/Swiper/Swiper";
import "./Acceuil.scss";

function Acceuil() {
  return (
    <div className="acceuil__container">
      <header className="header__container">
        <Swiper />
      </header>
    </div>
  );
}

export default Acceuil;
