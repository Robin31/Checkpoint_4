import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import connexion from "../../services/connexion";

function ChienSolo() {
  const { id } = useParams();
  const [chien, setChien] = useState([]);

  const getChien = async () => {
    const chienData = await connexion.get(`/chiens/${id}`);
    try {
      if (chienData) {
        setChien(chienData);
      }
    } catch (error) {
      toast.error("Une erreur est survenue, pas de chance.");
    }
  };

  useEffect(() => {
    getChien();
  }, []);

  return (
    <div className="chiensolo-container">
      <h2 className="chiensolo-titre">{chien.prenom}</h2>
      <div className="image">
        <img src={chien.image} alt="" className="poster" />
      </div>
    </div>
  );
}

export default ChienSolo;
