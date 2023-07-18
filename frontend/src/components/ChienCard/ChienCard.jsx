import React from "react";
import { Link } from "react-router-dom";

function ChienCard({ chien }) {
  return (
    <div className="chiencard-container">
      <Link to={`/chiens/${chien.id}`}>
        <h1 className="chiencard-title">{chien.prenom}</h1>
      </Link>
      <img src={chien.image} alt="" className="chiencard-image" />
      <div className="chiencard-resume">
        {chien.age} ans
        {chien.race_id}
        {chien.sexe_id}
      </div>
    </div>
  );
}

export default ChienCard;
