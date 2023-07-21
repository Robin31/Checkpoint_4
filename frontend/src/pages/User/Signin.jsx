import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import { useCurrentUser } from "../../contexts/AuthContexts";
import "react-toastify/dist/ReactToastify.css";

import chiens from "../../assets/chiens.png";
import "./Signin.scss";

function Signin() {
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useCurrentUser();
  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const notify = (signin) => {
    if (signin.status === 200) {
      toast.success("Connexion réussie");
    } else if (signin.status === 400) {
      toast.warning(signin.data.msg);
    } else if (signin.status === 401) {
      toast.error("Les informations de connexion sont incorrectes");
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const signin = await connexion.post("/signin", userSignin);
      notify(signin);

      if (signin.status === 200) {
        const profil = {
          ...signin.data,
          connected: true,
        };
        setUser(profil);

        if (profil.role === "admin") {
          setTimeout(() => {
            navigate("/admin/");
          }, 2000);
        } else {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      }
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez réessayer dans quelques instants"
      );
    }
  };
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__img">
          <img src={chiens} alt="" />
        </div>

        <div className="login__forms">
          <form onSubmit={login} id="login-in" className="login__registre">
            <h1 className="login__title">Se connecter</h1>
            <div className="login__box">
              <i className="bx bx-at login__icon" />
              <input
                type="email"
                value={userSignin.email}
                onChange={(event) => handleUser(event)}
                name="email"
                placeholder="Email"
                className="login__input"
                required
              />
            </div>
            <div className="login__box">
              <i className="bx bx-lock-alt login__icon" />
              <input
                type="password"
                value={userSignin.password}
                onChange={(event) => handleUser(event)}
                name="password"
                placeholder="Mot de passe"
                className="login__input"
                required
              />
            </div>
            <button type="submit" className="login__button">
              Connexion
            </button>
            <div>
              <span className="login__account">
                Vous n'avez pas de compte ?
              </span>
              <Link to="/signup">
                <span className="login__signin" id="sign-up">
                  {" "}
                  S'enregistrer
                </span>
              </Link>
            </div>
          </form>

          <ToastContainer
            autoClose={2000}
            position="top-center"
            draggable
            transition={Flip}
            toastClassName="custom-toast"
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
