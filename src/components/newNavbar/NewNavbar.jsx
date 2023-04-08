import React, { useState } from "react";
import "./newnavbar.css";
import MUO from "../../assets/logo/MUO.png";
import secondlogo from "../../assets/logo/secondlogo.png";
import { NavLink } from "react-router-dom";
import { FaWheelchair } from "react-icons/fa";
function NewNavbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logos">
        <img src={MUO} alt="NSCP" className="logo1" />
        <img src={secondlogo} alt="" className="logo2" />
      </div>
      <header>
        <nav>
          <ul className={`nav-links ${navOpen ? "nav-open" : ""}`}>
            <li>
              <NavLink to="/">Laman Utama</NavLink>
            </li>
            <li>
              <NavLink to="/muo">Latar Belakang</NavLink>
            </li>
            <li className="dropdown">
              <NavLink to="/about">Profil</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/about">Profil Bandar Pintar Nageri</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Profil Bandar Pelan Tindakan</NavLink>
                </li>

                <li>
                  <NavLink to="/about">
                    Profil Bandar Pintar Command Center
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/profile-nscp">Integrasi</NavLink>
            </li>
            <li>
              <NavLink to="/profile-nscp">Analitik Data Raya</NavLink>
            </li>
            <li>
              <NavLink to="/profile-nscp">Repository Penarafan</NavLink>
            </li>
            <li>
              <NavLink to="/profile-nscp">Muat Turun</NavLink>
            </li>
            <li>
              <NavLink to="/profile-nscp">Hubungi Kami</NavLink>
            </li>
            <li>
              <NavLink to="/profile-nscp">Menu Utama</NavLink>
            </li>
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

export default NewNavbar;
