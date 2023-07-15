import React from "react";
import { Link } from "react-router-dom";

function Connect() {
  return (
    <div>
      <div className="connect">
        <Link to="#Abonnement" className="Abonner-btn">
          Pourquoi s'abonner?
        </Link>
        <Link to="/signin" className="base-btn">
          Se Connecter
        </Link>

        <Link to="/signup" className="base-btn">
          Créer un compte
        </Link>
      </div>
    </div>
  );
}

export default Connect;
