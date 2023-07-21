import React, { useState } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "./Benevole.scss";

const benevoleModel = {
  id: null,
  prenom: "",
  nom: "",
  age: "",
  motivation: "",
};

function Benevole() {
  const [benevole, setBenevole] = useState(benevoleModel);

  const handleBenevole = (event) => {
    setBenevole({ ...benevole, [event.target.name]: event.target.value });
  };

  const postBenevole = async (event) => {
    event.preventDefault();
    try {
      const benevoleData = await connexion.post("/benevoles", benevole);
      setBenevole(benevoleData.data);
    } catch (success) {
      toast.success(" erreur est survenue");
    }
  };

  return (
    <div className="benevole__container">
      <h2>Soyez utile</h2>
      <h2>Devenez Bénévole</h2>
      <form
        className="benevoles__container"
        onSubmit={(event) => postBenevole(event)}
      >
        <label className="benevoles__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="prenom"
            placeholder="Prénom"
            className="benevoles__input"
            value={benevole.prenom}
            onChange={(event) => handleBenevole(event)}
          />
        </label>

        <label className="benevoles__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="nom"
            placeholder="Nom"
            className="benevoles__input"
            value={benevole.nom}
            onChange={(event) => handleBenevole(event)}
          />
        </label>

        <label className="benevoles__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="age"
            placeholder="Age"
            className="benevoles__input"
            value={benevole.age}
            onChange={(event) => handleBenevole(event)}
          />
        </label>

        <label className="benevoles__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="motivation"
            placeholder="Motivation"
            className="benevoles__input"
            value={benevole.motivation}
            onChange={(event) => handleBenevole(event)}
          />
        </label>
        <button type="submit" className="benevoles__button">
          Postuler
        </button>
      </form>
      <ToastContainer
        autoClose={2000}
        position="top-center"
        draggable
        transition={Flip}
        toastClassName="custom-toast"
      />
    </div>
  );
}

export default Benevole;
