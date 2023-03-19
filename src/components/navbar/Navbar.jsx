import React, { useState, memo } from "react";
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
        <div className="imgs">
          <img src={mainlogo} alt="NSCP" className="logo1" />
          <img src={secondlogo} alt="" className="logo2" />
        </div>
        <span className="masuk">Logo Masuk</span>
      </div>
      <header>
        <nav>
          <ul className={`nav-links ${navOpen ? "nav-open" : ""}`}>
            <li>
              <NavLink to="/">LAMAN UTAMA</NavLink>
            </li>
            <li>
              <NavLink to="/latar-belakang">LATAR BELAKANG</NavLink>
            </li>
            <li>
              <NavLink to="/profile-bandar">
                PROFIL BANDAR PINTAR NEGARA
              </NavLink>
            </li>
            <li>
              <NavLink to="/platform-integrasi">
                PLATFORM INTEGRASI BANDAR PINTAR PBT
              </NavLink>
            </li>
            <li>
              <NavLink to="/analitik-data">
                ANALITIK DATA RAYA BANDAR PINTAR
              </NavLink>
            </li>
            <li>
              <NavLink to="/repository-penarafan">
                REPOSITORY PENARAFAN BANDAR PINTAR
              </NavLink>
            </li>
            <li>
              <NavLink to="/muat-turun">MUAT TURUN</NavLink>
            </li>
            <li>
              <NavLink to="/hubungi-kami">HUBUNGI KAMI</NavLink>
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

export default memo(Navbar);
