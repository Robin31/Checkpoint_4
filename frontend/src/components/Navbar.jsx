import React from "react";
import { Link } from "react-router-dom";
import { FaDog, FaEuroSign, FaQuestion } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMapPin } from "react-icons/hi2";
import { FaHandshakeSimple } from "react-icons/fa6";
import LogoRefuge from "../assets/LogoRefuge.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="header-container">
      <div className="container">
        <div className="left">
          <div className="logo">
            <img className="main-logo" src={LogoRefuge} alt="logo-Refuge " />
          </div>
          <h1>Refuge</h1>
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
      </div>
    </div>
  );
}

export default Navbar;
