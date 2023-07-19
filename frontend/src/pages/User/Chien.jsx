import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import connexion from "../../services/connexion";
import ChiensCard from "../../components/ChienCard/ChienCard";
import "./Chien.scss";

function Chien() {
  const [chiens, setChiens] = useState([]);

  const getChiens = async () => {
    try {
      const chiensData = await connexion.get("/chiens");
      setChiens(chiensData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  useEffect(() => {
    getChiens();
  }, []);

  return (
    <div className="chiens-container">
      <h1 className="main-title">Chiens en recherche d'amour</h1>
      <div className="chiens-list">
        {chiens.map((chien) => (
          <ChiensCard key={chien.id} chien={chien} />
        ))}
      </div>
    </div>
  );
}

export default Chien;
