import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "./Benevoles.scss";

const benevoleModel = {
  id: null,
  prenom: "",
  nom: "",
  age: "",
  motivation: "",
};

function Benevoles() {
  const [benevoles, setBenevoles] = useState([]);
  const [benevole, setBenevole] = useState(benevoleModel);

  const getBenevoles = async () => {
    try {
      const benevolesData = await connexion.get("/benevoles");
      setBenevoles(benevolesData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const postBenevole = async (event) => {
    event.preventDefault();
    try {
      const benevoleData = await connexion.post("/benevoles", benevole);
      setBenevole(benevoleData.data);
      getBenevoles();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const updateBenevoleState = (id) => {
    if (id === "") {
      setBenevole(benevoleModel);
    } else {
      setBenevole(benevoles.find((ch) => ch.id === +id));
    }
  };

  const deleteBenevole = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/benevoles/${benevole.id}`);
      setBenevole(benevoleModel);
      getBenevoles();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const handleBenevole = (name, value) => {
    setBenevole({ ...benevole, [name]: value });
  };

  useEffect(() => {
    getBenevoles();
  }, []);

  return (
    <div className="benevoles__containeru">
      <div className="benevoles__header">
        <label htmlFor="" className="benevoles__titre">
          Choisir un benevole
          <select
            className="benevoles__select"
            onChange={(event) => updateBenevoleState(event.target.value)}
          >
            <option value="">Rafraichir</option>
            {benevoles.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {ch.prenom}
              </option>
            ))}
          </select>
        </label>
      </div>
      <form className="benevoles__container">
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
            onChange={(event) =>
              handleBenevole(event.target.name, event.target.value)
            }
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
            onChange={(event) =>
              handleBenevole(event.target.name, event.target.value)
            }
          />
        </label>

        <label className="benevoles__label">
          <input
            type="text"
            required
            minLength={10}
            maxLength={255}
            name="age"
            placeholder="Age"
            className="benevoles__input"
            value={benevole.age}
            onChange={(event) =>
              handleBenevole(event.target.name, event.target.value)
            }
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
            onChange={(event) =>
              handleBenevole(event.target.name, event.target.value)
            }
          />
        </label>
      </form>
      {benevole.id && (
        <div className="benevoles__buttons">
          <button
            type="button"
            className="benevoles__button"
            onClick={(event) => deleteBenevole(event)}
          >
            Supprimer
          </button>
          <button
            type="button"
            className="benevoles__button"
            onClick={(event) => postBenevole(event)}
          >
            Ajouter
          </button>
        </div>
      )}

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
export default Benevoles;
