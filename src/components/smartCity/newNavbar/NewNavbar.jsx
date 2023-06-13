import React, { useState } from "react";
import "./newnavbar.css";
import MUO from "assets/logo/MUO.png";
import secondlogo from "assets/logo/secondlogo.png";
import { NavLink } from "react-router-dom";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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
              <NavLink to="/latar-belakang">Latar Belakang</NavLink>
            </li>
            <li className="dropdown">
              <NavLink to="/profile-bandar">Profil</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="#">Profil Bandar Pintar Nageri</NavLink>
                </li>
                <li>
                  <NavLink to="#">Profil Bandar Pelan Tindakan</NavLink>
                </li>

                <li>
                  <NavLink to="#">Profil Bandar Pintar Command Center</NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/platform-integrasi">Integrasi</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="#">Perbadanan Putrajaya</NavLink>
                </li>
                <li>
                  <NavLink to="#">Dewan Bandaraya Kuala Lumpur</NavLink>
                </li>

                <li>
                  <NavLink to="#">Majlis Bandaraya Johor Bharu</NavLink>
                </li>
                <li>
                  <NavLink to="#">Majlis Bandaraya Petaling Jaya</NavLink>
                </li>
                <li>
                  <NavLink to="#">Majlis Bandaraya Pulau Pilang</NavLink>
                </li>
                <li>
                  <NavLink to="#">Majlis Bandaraya Perbandaran Kulim</NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/analitik-data">Analitik Data Raya</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="#">Smart Governance</NavLink>
                </li>
                <li>
                  <NavLink to="#">Smart Living</NavLink>
                </li>
                <li>
                  <NavLink to="#">Smart Environment</NavLink>
                </li>
                <li>
                  <NavLink to="#">Smart Mobility</NavLink>
                </li>
                <li>
                  <NavLink to="#">Smart Economy</NavLink>
                </li>
                <li>
                  <NavLink to="#">Smart People</NavLink>
                </li>
                <li>
                  <NavLink to="#">Smart Digital Infrastructure</NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/latar-penarafan">Penarafan Bandar Pintar</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/latar-penarafan">
                    Latar Belakang Penarafan
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kategory-penarafan">
                    Ketegori Penarafan Bandar Pintar
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profil-pbt">
                    Permohonan Penarafan Bandar Pintar
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/status-pencapaian">
                    Status Pencapaian Penarafan Bandar Pintar
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pengurusan-penarafan">
                    Pengurusan Penarafan Bandar Pintar
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <NavLink to="/pilan-tindakan">Muat Turun</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="">Pelan Tindakan Bandar Pintar</NavLink>
                </li>
                <li>
                  <NavLink to="">Profil Bandar Pintar</NavLink>
                </li>
                <li>
                  <NavLink to="">Status Penarafan Bandar Pintar</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/hubungi-kami">Hubungi Kami</NavLink>
            </li>
            <li>
              <NavLink to="/">Menu Utama</NavLink>
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
