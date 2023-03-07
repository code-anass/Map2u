import React, { useState } from "react";
import "./navbar.css";
import mainlogo from "../../assets/logo/mainlogo.png";
import secondlogo from "../../assets/logo/secondlogo.png";
import { NavLink } from "react-router-dom";
import { FaWheelchair } from "react-icons/fa";
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logos">
        <img src={mainlogo} alt="NSCP" className="logo1" />
        <img src={secondlogo} alt="" className="logo2" />
      </div>
      <header>
        <nav>
          <ul className={`nav-links ${navOpen ? "nav-open" : ""}`}>
            <li>
              <NavLink to="/">UTAMA</NavLink>
            </li>
            <li>
              <NavLink to="/muo">MUO</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT NSCP</NavLink>
            </li>
            <li>
              <NavLink to="/profile-nscp">PROFILE NSCP</NavLink>
            </li>
            <li>
              <NavLink to="/integration-pbt">INTEGRATION PBT</NavLink>
            </li>
            <li>
              <NavLink to="/analytics-nscp">ANALYTICS NSCP</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">CONTACT US</NavLink>
            </li>
            <li>
              <span className="login">LOGIN</span>
            </li>

            <span>
              <FaWheelchair className="chair" />
            </span>
          </ul>
          <div className="burger" onClick={() => setNavOpen(!navOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
