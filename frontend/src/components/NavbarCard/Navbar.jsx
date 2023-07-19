import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDog, FaEuroSign, FaQuestion } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMapPin } from "react-icons/hi2";
import { FaHandshakeSimple } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import LogoRefuge from "../../assets/LogoRefuge.png";
import "./Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="container">
        <div className="left">
          <div className="logo">
            <img className="main-logo" src={LogoRefuge} alt="logo-Refuge " />
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
          <li className="nav-item3">
            <Link to="/donation" className="nav-link">
              <FaEuroSign /> Donation
            </Link>
          </li>
        </div>
        <div className="right">
          <li className="nav-item4">
            <Link to="/compte" className="nav-link">
              Se connecter <BsFillPersonFill />
            </Link>
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
              <li className="nav-item3">
                <Link to="/donation" className="nav-link">
                  Donation <FaEuroSign />
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
