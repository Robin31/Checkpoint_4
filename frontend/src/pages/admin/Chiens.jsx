import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "./Chiens.scss";

const chienModel = {
  id: null,
  prenom: "",
  age: "",
  image: "",
  alternatif: "",
  description: "",
  castration: "",
  race_id: "",
  name: "",
  sexe_id: "",
  attribut: "",
  caractere_id: "",
  caractere: "",
};

function Chiens() {
  const [chiens, setChiens] = useState([]);
  const [chien, setChien] = useState(chienModel);
  const [races, setRaces] = useState([]);
  const [sexes, setSexes] = useState([]);
  const [caracteres, setCaracteres] = useState([]);

  const getChiens = async () => {
    try {
      const chiensData = await connexion.get("/chiens");
      setChiens(chiensData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const getRaces = async () => {
    try {
      const racesData = await connexion.get("/races");
      setRaces(racesData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const getSexes = async () => {
    try {
      const sexesData = await connexion.get("/sexes");
      setSexes(sexesData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const getCaracteres = async () => {
    try {
      const caracteresData = await connexion.get("/caracteres");
      setCaracteres(caracteresData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const postChien = async (event) => {
    event.preventDefault();
    try {
      const chienData = await connexion.post("/chiens", chien);
      setChien(chienData.data);
      getChiens();
    } catch (error) {
      toast.error("Une erreur est ");
    }
  };

  const updateChienState = (id) => {
    if (id === "") {
      setChien(chienModel);
    } else {
      setChien(chiens.find((ch) => ch.id === +id));
    }
  };

  const updateChien = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/chiens/${chien.id}`, chien);
      setChien(chienModel);
      getChiens();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const deleteChien = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/chiens/${chien.id}`);
      setChien(chienModel);
      getChiens();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const handleChien = (name, value) => {
    setChien({ ...chien, [name]: value });
  };

  useEffect(() => {
    getChiens();
    getRaces();
    getSexes();
    getCaracteres();
  }, []);

  return (
    <div className="chiens__containeru">
      <div className="chiens__header">
        <label htmlFor="" className="chiens__titre">
          Choisir un chien
          <select
            className="chiens__select"
            onChange={(event) => updateChienState(event.target.value)}
          >
            <option value="">Rafraichir</option>
            {chiens.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {ch.prenom}
              </option>
            ))}
          </select>
        </label>
        <img src={chien.image} alt="" className="chiens__img" />
      </div>
      <form
        className="chiens__container"
        onSubmit={(event) => postChien(event)}
      >
        <label className="chiens__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="prenom"
            placeholder="Prénom"
            className="chiens__input"
            value={chien.prenom}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <label className="chiens__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="age"
            placeholder="age"
            className="chiens__input"
            value={chien.age}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <label className="chiens__label">
          <input
            type="text"
            required
            minLength={10}
            maxLength={255}
            name="image"
            placeholder="insérer image"
            className="chiens__input"
            value={chien.image}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <label className="chiens__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="alternatif"
            placeholder="texte-image"
            className="chiens__input"
            value={chien.alternatif}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <label className="chiens__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="castration"
            placeholder="Castration Oui/Non"
            className="chiens__input"
            value={chien.castration}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <select
          className="chiens__select"
          name="race_id"
          onChange={(event) =>
            handleChien(event.target.name, event.target.value)
          }
          value={chien.race_id}
        >
          <option value="">Choisir la race</option>
          {races.map((race) => (
            <option value={race.id} key={race.id}>
              {race.name}
            </option>
          ))}
        </select>

        <select
          className="chiens__select"
          name="sexe_id"
          onChange={(event) =>
            handleChien(event.target.name, event.target.value)
          }
          value={chien.sexe_id}
        >
          <option value="">Choisir le sexe</option>
          {sexes.map((sexe) => (
            <option value={sexe.id}>{sexe.attribut}</option>
          ))}
        </select>

        <select
          className="chiens__select"
          name="caractere_id"
          onChange={(event) =>
            handleChien(event.target.name, event.target.value)
          }
          value={chien.caractere_id}
        >
          <option value="">Choisir le caractere</option>
          {caracteres.map((caractere) => (
            <option value={caractere.id}>{caractere.caractere}</option>
          ))}
        </select>

        {!chien.id && (
          <button type="submit" className="chiens__button">
            Ajouter
          </button>
        )}
      </form>
      {chien.id && (
        <div className="chiens__buttons">
          <button
            type="button"
            className="chiens__button"
            onClick={(event) => deleteChien(event)}
          >
            Supprimer
          </button>
          <button
            type="button"
            className="chiens__button"
            onClick={(event) => updateChien(event)}
          >
            Modifier
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
export default Chiens;
