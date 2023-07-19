import React from "react";
import "./Tableau.scss";
import { TbClockHour4 } from "react-icons/tb";
import { BiHomeSmile } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

function Tableau() {
  return (
    <div className="nous__contacter">
      <div className="the__grid">
        <div className="header">
          <h1 className="title">
            <TbClockHour4 /> Horaires d'ouvertures
          </h1>
        </div>
        <grid className="grid__container">
          <grid className="div1">
            <p>Lundi</p>
          </grid>
          <grid className="div2">
            <p>08:30-12:30</p>
          </grid>
          <grid className="div3">
            <p>14:00-19:00</p>
          </grid>
          <grid className="div4">
            <p>Mardi</p>
          </grid>
          <grid className="div5">
            <p>08:30-12:30</p>
          </grid>
          <grid className="div6">
            <p>14:00-19:00</p>
          </grid>
          <grid className="div7">
            <p>Mercredi</p>
          </grid>
          <grid className="div8">
            <p>08:30-12:30</p>
          </grid>
          <grid className="div9">
            <p>14:00-19:00</p>
          </grid>
          <grid className="div10">
            <p>Jeudi</p>
          </grid>
          <grid className="div11">
            <p>08:30-12:30</p>
          </grid>
          <grid className="div12">
            <p>14:00-19:00</p>
          </grid>
          <grid className="div13">
            <p>Vendredi</p>
          </grid>
          <grid className="div14">
            <p>08:30-12:30</p>
          </grid>
          <grid className="div15">
            <p>14:00-19:00</p>
          </grid>
          <grid className="div16">
            <p>Samedi</p>
          </grid>
          <grid className="div17">
            <p>08:30-12:30</p>
          </grid>
          <grid className="div18">
            <p>14:00-17:00</p>
          </grid>
          <grid className="div19">
            <p>Dimanche</p>
          </grid>
          <grid className="div20">
            <p>08:30-12:30</p>
          </grid>
          <grid className="div21">
            <p />
          </grid>
        </grid>
      </div>
      <div className="autre">
        <div className="adresse">
          <h1 className="title">
            <BiHomeSmile /> Adresse
          </h1>
          <p>Zone d'activité du beau gosse</p>
          <p>102 Rue de Napoléon</p>
          <p>31470 Plusbellevilledumonde</p>
        </div>
        <div className="joindre">
          <h1 className="title">
            <FaPhoneAlt /> Nous joindre
          </h1>
          <p>00 22 44 66 88</p>
          <p>Lemeilleurdev@oupas.com</p>
        </div>
      </div>
    </div>
  );
}

export default Tableau;
