import React from "react";
import { Link } from "react-router-dom";
import "./ChienCard.scss";

function ChienCard({ chien }) {
  return (
    <div className="wrapper">
      <div className="card">
        <img src={chien.image} alt="profile-pict" className="card__img" />
        <div className="card__body">
          <h1 className="card__title">{chien.prenom}</h1>
          <h2 className="card__age">Age : {chien.age} ans </h2>
          <h2 className="card__race">
            {chien.race_id === 1 ? <div>Boxer</div> : null}
            {chien.race_id === 2 ? <div>Chihuhua papillon</div> : null}
            {chien.race_id === 3 ? <div>Teckel</div> : null}
            {chien.race_id === 4 ? <div>Malinois</div> : null}
            {chien.race_id === 5 ? <div>Berger Allemand</div> : null}
            {chien.race_id === 6 ? <div>Cocker</div> : null}
            {chien.race_id === 7 ? <div>Caniche</div> : null}
            {chien.race_id === 8 ? <div>Schnauzer</div> : null}
            {chien.race_id === 9 ? <div>Labrador</div> : null}
            {chien.race_id === 10 ? <div>Lévrier Afghan</div> : null}
            {chien.race_id === 11 ? <div>Husky</div> : null}
            {chien.race_id === 12 ? <div>Cane Corso</div> : null}
            {chien.race_id === 13 ? <div>Bouvier</div> : null}
            {chien.race_id === 14 ? <div>Bouledogue Anglais</div> : null}
            {chien.race_id === 15 ? <div>Beagle</div> : null}
            {chien.race_id === 16 ? <div>Shih Tzu</div> : null}
            {chien.race_id === 17 ? <div>Dalmatien</div> : null}
            {chien.race_id === 18 ? <div>Dobermann</div> : null}
            {chien.race_id === 19 ? <div>Saint-Bernard</div> : null}
            {chien.race_id === 20 ? <div>Border Collie</div> : null}
            {chien.race_id === 21 ? <div>Rottweiler</div> : null}
            {chien.race_id === 22 ? <div>Samoyède</div> : null}
            {chien.race_id === 23 ? <div>Bichon</div> : null}
            {chien.race_id === 24 ? <div>Berger Picard</div> : null}
            {chien.race_id === 25 ? <div>Barzoi</div> : null}
          </h2>
          <h2 className="card__age">
            {chien.sexe_id === 1 ? <div>Mâle</div> : null}
            {chien.sexe_id === 2 ? <div>Femelle</div> : null}
            {chien.sexe_id === 3 ? <div>Non binaire</div> : null}
          </h2>
        </div>
        <Link to={`/chiens/${chien.id}`} className="card__link">
          <button type="button" className="card__btn">
            Adopte moi
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChienCard;
