import React from "react";
import Swiper from "../../components/Swiper/Swiper";
import "./Acceuil.scss";
import Napoleon from "../../assets/Napoleon.png";

function Acceuil() {
  return (
    <div className="acceuil__container">
      <h1 className="acceuil__title">Bienvenue à toi</h1>
      <header className="header__container">
        <Swiper />
      </header>
      <h2 className="acceuil__soustitre">Qui suis-je ?</h2>
      <div className="acceuil__présentation">
        <p>
          Bonjour à toi petit curieux, je me présente, je suis Napoléon et j'ai
          crée le refuge car je suis un homme bon. Je n'ai pas hésité à changer
          cet ancien terrain de foot, en un havre de paix pour chiens maltraité
          et/ou abandonné. Toi aussi tu as l'air d'etre une personne généreuse
          puisque tu as cliqué sur le site, mais ce n'est pas fini. Tu n'as fais
          que la moitié du boulot, il te faut choisir un chien qui mérite amour
          et compagnie. En te souhaitant une bonne visite sur le site.
        </p>
        <img src={Napoleon} alt="icon" className="acceuil__icon" />
      </div>
      <div className="acceuil__chiffres">
        <h2 className="acceuil__soustitre">Quelques chiffres</h2>
      </div>
    </div>
  );
}

export default Acceuil;
