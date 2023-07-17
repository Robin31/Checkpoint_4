import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

const chienModel = {
  id: null,
  prenom: "",
  age: "",
  image: "",
  alt: "",
  description: "",
  castration: "",
  race_id: "",
  sexe_id: "",
  caractere_id: "",
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
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const updateChienState = (id) => {
    if (id === 0) {
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
    <div className="Bloc1">
      <div className="container">
        <label htmlFor="">
          Choisir une chien
          <select onChange={(event) => updateChienState(+event.target.value)}>
            <option value={0}>Rafraichir</option>
            {chiens.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {ch.prenom}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="second-container">
        <img src={chien.src} alt="imagerie de chien" />
      </div>
      <form onSubmit={(event) => postChien(event)}>
        <label>
          Prenom
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="prenom"
            value={chien.prenom}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <label>
          Age
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="age"
            value={chien.age}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <label>
          Image
          <input
            type="text"
            required
            minLength={10}
            maxLength={255}
            name="image"
            value={chien.image}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <label>
          Alternatif
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="alternatif"
            value={chien.alternatif}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <label>
          Castration
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="castration"
            value={chien.castration}
            onChange={(event) =>
              handleChien(event.target.name, event.target.value)
            }
          />
        </label>

        <h2>Liste des races</h2>
        <select
          name="race_id"
          onChange={(event) => handleChien(event)}
          value={chien.race_id}
        >
          <option value="">Choisir la race</option>
          {races.map((race) => (
            <option value={race.id}>{race.name}</option>
          ))}
        </select>

        <h2>Liste des sexes</h2>
        <select
          name="sexe_id"
          onChange={(event) => handleChien(event)}
          value={chiens.sexe_id}
        >
          <option value="">Choisir le sexe</option>
          {sexes.map((sexe) => (
            <option value={sexe.id}>{sexe.attribut}</option>
          ))}
        </select>

        <h2>Liste des caractères</h2>
        <select
          name="caractere_id"
          onChange={(event) => handleChien(event)}
          value={chien.caractere_id}
        >
          <option value="">Choisir le caractere</option>
          {caracteres.map((caractere) => (
            <option value={caractere.id}>{caractere.caractere}</option>
          ))}
        </select>

        {!chien.id && <button type="submit">Ajouter</button>}
      </form>
      {chien.id && (
        <>
          <button type="button" onClick={(event) => deleteChien(event)}>
            Supprimer
          </button>
          <button type="button" onClick={(event) => updateChien(event)}>
            Modifier
          </button>
        </>
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
