import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__container">
      <footer>
        <div className="footer__container2">
          <div className="footer__grid">
            <div className="footer__gauche">
              <h3 className="div1">Entreprises partenaires</h3>
              <ul className="div4">
                <li>
                  <a href="http://www.etablissements-lacaze.fr/">Ets Lacaze</a>
                </li>
                <li>
                  <a href="https://www.pizza-mongelli.com/">
                    Pizzeria Mongelli
                  </a>
                </li>
                <li>
                  <a href="https://www.stadetoulousain.fr/">Stade Toulousain</a>
                </li>
              </ul>
            </div>
            <div className="footer__centre">
              <h3 className="div2">A propos</h3>
              <ul className="div5">
                <li>
                  <a href="/">Entreprise</a>
                </li>
                <li>
                  <a href="/localisation">Nous voir</a>
                </li>
                <li>
                  <a href="/localisation">Téléphone</a>
                </li>
              </ul>
            </div>
            <div className="footer__droite">
              <h3 className="div3">Refuge</h3>
              <ul className="div6">
                <li>
                  <a href="/chiens">Nos chiens</a>
                </li>
                <li>
                  <a href="/">Devenir Bénévole</a>
                </li>
                <li>
                  <a href="https://fr.wikipedia.org/wiki/Napol%C3%A9on_Ier">
                    Qui suis je ?
                  </a>
                </li>
              </ul>
            </div>
            <p className="compagnie">Refuge by Napoleon © 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
