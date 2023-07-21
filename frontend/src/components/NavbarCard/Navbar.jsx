import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDog, FaQuestion } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMapPin } from "react-icons/hi2";
import { FaHandshakeSimple } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import LogoRefuge from "../../assets/LogoRefuge.png";
import "./Navbar.scss";
import { useCurrentUser } from "../../contexts/AuthContexts";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useCurrentUser();

  return (
    <div className="header-container">
      <div className="container">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img className="main-logo" src={LogoRefuge} alt="logo-Refuge " />
            </Link>
          </div>
          <div className="titres">
            <h1>Refuge</h1>
          </div>
        </div>
        <div className="center">
          <li className="nav-item1">
            <Link to="/chiens" className="nav-link">
              <FaDog /> Nos chiens
            </Link>
          </li>
          <li className="nav-item2">
            <Link to="/benevole" className="nav-link">
              <FaHandshakeSimple /> Bénévole
            </Link>
          </li>
        </div>
        <div className="right">
          <li className="nav-item4">
            {user.connected ? (
              <Link to="/profil" className="nav-link">
                {" "}
                Mon compte <BsFillPersonFill />{" "}
              </Link>
            ) : (
              <Link to="/compte" className="nav-link">
                Se connecter <BsFillPersonFill />
              </Link>
            )}
          </li>
          <li className="nav-item5">
            <Link to="/localisation" className="nav-link">
              <HiMapPin />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-link">
              <FaQuestion />
            </Link>
          </li>
        </div>
        <div className={open ? "open" : null}>
          <button
            type="button"
            className="menu-burger"
            onClick={() => setOpen(!open)}
          >
            <CiMenuBurger />
          </button>
          {open && (
            <div className="menu-deroulant">
              <li className="nav-item1">
                <Link to="/chiens" className="nav-link">
                  Nos chiens <FaDog />
                </Link>
              </li>
              <li className="nav-item2">
                <Link to="/benevole" className="nav-link">
                  Bénévole <FaHandshakeSimple />
                </Link>
              </li>
              <li className="nav-item4">
                <Link to="/compte" className="nav-link">
                  Se connecter <BsFillPersonFill />
                </Link>
              </li>
              <li className="nav-item5">
                <Link to="/localisation" className="nav-link">
                  Localisation <HiMapPin />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">
                  FAQ <FaQuestion />
                </Link>
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
