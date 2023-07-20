import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "./Races.scss";

const raceModel = {
  id: null,
  name: "",
};

function Races() {
  const [races, setRaces] = useState([]);
  const [race, setRace] = useState(raceModel);

  const getRaces = async () => {
    try {
      const racesData = await connexion.get("/races");
      setRaces(racesData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const postRace = async (event) => {
    event.preventDefault();
    try {
      const raceData = await connexion.post("/races", race);
      setRace(raceData.data);
      getRaces();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const updateRaceState = (id) => {
    if (id === 0) {
      setRace(raceModel);
    } else {
      setRace(races.find((rc) => rc.id === +id));
    }
  };

  const updateRace = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/races/${race.id}`, race);
      setRace(raceModel);
      getRaces();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const deleteRace = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/races/${race.id}`);
      setRace(raceModel);
      getRaces();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const handleRace = (name, value) => {
    setRace({ ...race, [name]: value });
  };

  useEffect(() => {
    getRaces();
  }, []);

  return (
    <div className="races__containeru">
      <div className="races__header">
        <label htmlFor="" className="races__titre">
          Choisir une race
          <select
            className="races__select"
            onChange={(event) => updateRaceState(+event.target.value)}
          >
            <option value={0}>Rafraichir</option>
            {races.map((rc) => (
              <option key={rc.id} value={rc.id}>
                {rc.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <form className="races__container" onSubmit={(event) => postRace(event)}>
        <label className="races__label">
          Race
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="name"
            className="races__input"
            value={race.name}
            onChange={(event) =>
              handleRace(event.target.name, event.target.value)
            }
          />
        </label>

        {!race.id && (
          <button type="submit" className="races__button">
            Ajouter
          </button>
        )}
      </form>
      {race.id && (
        <>
          <button
            type="button"
            className="races__button"
            onClick={(event) => deleteRace(event)}
          >
            Supprimer
          </button>
          <button
            type="button"
            className="races__button"
            onClick={(event) => updateRace(event)}
          >
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
export default Races;
