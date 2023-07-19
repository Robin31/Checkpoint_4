import React from "react";
import { Link } from "react-router-dom";
import Dead from "./assets/Dead.jpg";
import "./Error.scss";

function Error() {
  return (
    <div className="page__error">
      <div className="header-error">
        <h1 className="title__error">Les chiens à adopter ne sont pas là</h1>
      </div>
      <img className="dead__error" src={Dead} alt="" />
      <Link to="/">
        <button className="error__sortir" type="button">
          Retourner à l'acceuil
        </button>
      </Link>
    </div>
  );
}

export default Error;
