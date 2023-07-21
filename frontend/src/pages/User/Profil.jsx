import React from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import { useCurrentUser } from "../../contexts/AuthContexts";
import "./Profil.scss";

function Profil() {
  const { user, setUser } = useCurrentUser();

  const handleUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const updateUser = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/profils/${user.id}`, user);
      toast.success("=)");
    } catch (error) {
      toast.error("Finito ?");
    }
  };

  return (
    <div>
      <form
        className="profils__container"
        onSubmit={(event) => updateUser(event)}
      >
        <img src={user.image} alt="" className="profils__img" />
        <label className="profils__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="firstname"
            placeholder="Prénom"
            className="profils__input"
            value={user.firstname}
            onChange={(event) => handleUser(event)}
          />
        </label>

        <label className="profils__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="lastname"
            placeholder="nom"
            className="profils__input"
            value={user.lastname}
            onChange={(event) => handleUser(event)}
          />
        </label>

        <label className="profils__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="src"
            placeholder="Insérer image"
            className="profils__input"
            value={user.src}
            onChange={(event) => handleUser(event)}
          />
        </label>

        {/* <label className="profils__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="image"
            placeholder="insérer image"
            className="profils__input"
            value={user.image}
            onChange={(event) =>
              handleUser(event)
            }
          />
        </label> */}
        <button type="submit" className="profils__button">
          Modifier
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

export default Profil;
