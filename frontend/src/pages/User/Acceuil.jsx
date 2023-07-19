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
        <div className="chiffre-container">
          <div className="chiffre-card">
            <h3 className="chiffre-titre">100.000</h3>
            <p>
              Soit le nombre de d'abandon, chaque année, d'animaux de compagnie
              dans notre beau pays. Et on se dit civilisé ?
            </p>
          </div>
          <div className="chiffre-card">
            <h3 className="chiffre-titre">74j 3h et 26min</h3>
            <p>C'est le temps moyen que nos chiens passe chez nous.</p>
          </div>
          <div className="chiffre-card">
            <h3 className="chiffre-titre">62ans</h3>
            <p>
              Soit la durée de séjour de Brigitte chez nous... Personne n'en
              veux, elle est immortelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
