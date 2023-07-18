import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import connexion from "../../services/connexion";
import "./ChienSolo.scss";

function ChienSolo() {
  const { id } = useParams();
  const [chien, setChien] = useState([]);
  const [open, setOpen] = useState(false);

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
    <div className="containeru">
      <div className="carte">
        <img src={chien.image} alt="" className="carte__img" />
        <div className="carte__body">
          <h1 className="carte__title">{chien.prenom}</h1>
          <h2 className="carte__caractere">
            {chien.caractere_id === 1 ? <div>Calme</div> : null}
            {chien.caractere_id === 2 ? <div>Joueur</div> : null}
            {chien.caractere_id === 3 ? <div>Fidèle</div> : null}
            {chien.caractere_id === 4 ? <div>Fugueur</div> : null}
            {chien.caractere_id === 5 ? <div>Affectueux</div> : null}
            {chien.caractere_id === 6 ? <div>Courageux</div> : null}
            {chien.caractere_id === 7 ? <div>Protecteur</div> : null}
            {chien.caractere_id === 8 ? <div>Sociable</div> : null}
            {chien.caractere_id === 9 ? <div>Tonique</div> : null}
            {chien.caractere_id === 10 ? <div>Monarque</div> : null}
            {chien.caractere_id === 11 ? (
              <div>Pas le couteau le plus aiguisé du tiroir</div>
            ) : null}
          </h2>
          <h2 className="carte__castration">
            {chien.castration === 0 ? <div>Pas castré</div> : <div>Castré</div>}
          </h2>
          <div className={open ? "open" : null}>
            {open && (
              <div className="carte__description">{chien.description}</div>
            )}
            <button
              type="button"
              className="btn__description"
              onClick={() => setOpen(!open)}
            >
              En savoir plus
            </button>
          </div>
          <Link to={`/chiens/${chien.id}`} className="carte__link">
            <button type="button" className="carte__btn">
              Adopte moi
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChienSolo;
