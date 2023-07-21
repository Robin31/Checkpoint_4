import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import chiens from "../../assets/chiens.png";
import "./Signin.scss";

function Signup() {
  const [userSignup, setUserSignup] = useState({
    id: null,
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserSignup({ ...userSignup, [event.target.name]: event.target.value });
  };

  const notify = (signup) => {
    if (signup.status === 201) {
      toast.success(signup.data.msg);
      setTimeout(() => {
        navigate("/compte");
      }, 5000);
    } else if (signup.status === 409 || signup.status === 400) {
      toast.info(signup.data.msg);
    } else {
      toast.error(
        "Une erreur s'est produite. Veuillez réessayer dans quelques instants"
      );
    }
  };

  const createAccount = async (event) => {
    event.preventDefault();

    if (userSignup.password !== userSignup.passwordConfirmation) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }
    const { passwordConfirmation, ...userData } = userSignup;

    try {
      const signup = await connexion.post("/signup", userData);
      notify(signup);
    } catch (err) {
      toast.error(
        "Une erreur s'est produite. Veuillez ressayer dans quelques instants"
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
          <form
            onSubmit={createAccount}
            className="login__create"
            id="login-up"
          >
            <h1 className="login__title">Créer un compte</h1>
            <div className="login__box">
              <i className="bx bx-at login__icon" />
              <input
                type="email"
                value={userSignup.email}
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
                value={userSignup.password}
                onChange={(event) => handleUser(event)}
                name="password"
                placeholder="Password"
                className="login__input"
                required
              />
            </div>
            <div className="login__box">
              <i className="bx bx-lock-alt login__icon" />
              <input
                type="password"
                value={userSignup.passwordConfirmation}
                onChange={(event) => handleUser(event)}
                name="passwordConfirmation"
                placeholder="Confirmer le mot de passe"
                className="login__input"
                required
              />
            </div>

            <button type="submit" className="login__button">
              S'inscrire
            </button>
            <div>
              <span className="login__account">Vous avez déjà un compte ?</span>
              <Link to="/compte">
                <span className="login__signup" id="sign-in">
                  {" "}
                  Se connecter
                </span>
              </Link>
            </div>
          </form>
          <ToastContainer
            autoClose={5000}
            position="top-center"
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
