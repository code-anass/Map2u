import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-heading">EKSEKUTIF</li>
        <li className="nav-item">
          <NavLink
            className="nav-link collapsed"
            to="/dashboard"
            style={({ isActive }) => {
              if (isActive) {
                return {
                  color: "#4154f1",
                  fontWeight: "bold",
                  backgroundColor: "#f6f9ffff",
                };
              }
            }}
          >
            <i className="bi bi-bar-chart-line" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link collapsed"
            to="/modulUtama"
            style={({ isActive }) => {
              if (isActive) {
                return {
                  color: "#4154f1",
                  fontWeight: "bold",
                  backgroundColor: "#f6f9ffff",
                };
              }
            }}
          >
            <i className="bi bi-house-door" />
            <span>Modul Utama</span>
          </NavLink>
        </li>
        {/* End Eksekutif */}
        <li className="nav-heading">PENTADBIRAN</li>
        <li className="nav-item">
          {/* <a className="nav-link collapsed"> */}
          <NavLink
            className="nav-link collapsed"
            to="/dashboardPengguna"
            style={({ isActive }) => {
              if (isActive) {
                return {
                  color: "#4154f1",
                  fontWeight: "bold",
                  backgroundColor: "#f6f9ffff",
                };
              }
            }}
          >
            <i className="bi bi-pie-chart" />
            <span>Dashboard Pengguna</span>
          </NavLink>
          {/* </a> */}
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#pengguna-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-person" />
            <span>Pengguna</span>
            <i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul
            id="pengguna-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <NavLink
                className="nav-link collapsed"
                to="/senaraiPengguna"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      color: "#4154f1",
                      fontWeight: "bold",
                      backgroundColor: "#f6f9ffff",
                    };
                  }
                }}
              >
                <i className="bi bi-circle" />
                <span>Senarai Pengguna</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link collapsed"
                to="/senaraiPenggunaBaharu"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      color: "#4154f1",
                      fontWeight: "bold",
                      backgroundColor: "#f6f9ffff",
                    };
                  }
                }}
              >
                <i className="bi bi-circle" />
                <span>Senarai Pengguna Baharu</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#tetapanpengguna-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-circle" />
                <span>Tetapan Pengguna</span>
                <i className="bi bi-chevron-down ms-auto" />
              </a>
              <ul id="tetapanpengguna-nav" className="nav-content collapse ">
                <li className="mx-3">
                  <NavLink
                    to="/roles"
                    style={({ isActive }) => {
                      if (isActive) {
                        return {
                          color: "#4154f1",
                          fontWeight: "bold",
                          backgroundColor: "#f6f9ffff",
                        };
                      }
                    }}
                  >
                    <span>Roles</span>
                  </NavLink>
                </li>
                <li className="mx-3">
                  <a href="forms-layouts.html">
                    <span>Permissions</span>
                  </a>
                </li>
                <li className="mx-3">
                  <a href="forms-layouts.html">
                    <span>Routes</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#pengurusandata-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-layout-text-window-reverse" />
            <span>Pengurusan Data</span>
            <i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul
            id="pengurusandata-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <li>
              <NavLink
              className="nav-link collapsed"
              to="/senaraiPengurusanData"
              style={({ isActive }) => {
                if (isActive) {
                  return {
                    color: "#4154f1",
                    fontWeight: "bold",
                    backgroundColor: "#f6f9ffff",
                  };
                }
              }}
            >
              <i className="bi bi-circle" />
              <span>Senarai Pengurusan Data</span>
            </NavLink>
              </li>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#servispeta-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-pin-map" />
            <span>Servis Peta</span>
            <i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul
            id="servispeta-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
            <NavLink
            className="nav-link collapsed"
            to="/servisPeta"
            style={({ isActive }) => {
              if (isActive) {
                return {
                  color: "#4154f1",
                  fontWeight: "bold",
                  backgroundColor: "#f6f9ffff",
                };
              }
            }}
          >
            <i className="bi bi-circle" />
            <span>Senarai Servis Peta</span>
          </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#cms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-wrench" />
            <span>Content Management System</span>
            <i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul
            id="cms-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <NavLink
                to="/tetapanBerita"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      color: "#4154f1",
                      fontWeight: "bold",
                      backgroundColor: "#f6f9ffff",
                    };
                  }
                }}
              >
                <i className="bi bi-circle" />
                <span>Tetapan Berita</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tetapanRakanKolaborasi"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      color: "#4154f1",
                      fontWeight: "bold",
                      backgroundColor: "#f6f9ffff",
                    };
                  }
                }}
              >
                <i className="bi bi-circle" />
                <span>Tetapan Rakan Kolaborasi</span>
              </NavLink>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i className="bi bi-circle" />
                <span>Tetapan Insights</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i className="bi bi-circle" />
                <span>Tetapan Data Galeri</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i className="bi bi-circle" />
                <span>Tetapan Pengumuman</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i className="bi bi-circle" />
                <span>Tetapan Slider</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i className="bi bi-circle" />
                <span>Tetapan Dashboard UO</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#audit-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-ui-checks" />
            <span>Audit</span>
            <i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul
            id="audit-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="icons-bootstrap.html">
                <i className="bi bi-circle" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="icons-remix.html">
                <i className="bi bi-circle" />
                <span>Entri Audit</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i className="bi bi-circle" />
                <span>Jejak Audit</span>
              </a>
            </li>
          </ul>
        </li>
        {/* End Pentadbiran */}
        <li className="nav-heading">PELAPORAN DAN PEMANTAUAN BANDAR MAMPAN</li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-view-list" />
            <span>
              Sustainable Development <br /> Goal (SDGs)
            </span>
          </a>
        </li>
        {/* End Profile Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-faq.html">
            <i className="bi bi-question-circle" />
            <span>
              New Urban <br /> Agenda (NUA)
            </span>
          </a>
        </li>
        {/* End F.A.Q Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope" />
            <span>
              National Physical <br /> Plan (RFN)
            </span>
          </a>
        </li>
        {/* End Contact Page Nav */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#dpn-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-gem" />
            <span>
              Dasar Perbandaran <br /> Negara (DPN2)
            </span>
            <i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul
            id="dpn-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="icons-bootstrap.html">
                <i className="bi bi-circle" />
                <span>Pelaporan DPN 2</span>
              </a>
            </li>
            <li>
              <a href="icons-remix.html">
                <i className="bi bi-circle" />
                <span>Kemaskini Pemantauan</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i className="bi bi-circle" />
                <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list" />
            <span>
              National Rural Physical <br /> Planning Policy (DPFDN)
            </span>
          </a>
        </li>
        {/* End Register Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-stack" />
            <span>
              Development Composite <br /> Index (IKP)
            </span>
          </a>
        </li>
        {/* End Login Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-error-404.html">
            <i className="bi bi-dash-circle" />
            <span>Development Plan (RP)</span>
          </a>
        </li>
        {/* End Error 404 Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-kanban" />
            <span>Dashboard Pencapaian</span>
          </a>
        </li>
        <li className="nav-heading">MAKLUMAT BANDAR</li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-film" />
            <span>Data Galeri</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-globe" />
            <span>Peta Interaktif</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-cloud" />
            <span>Perkongsian Map Servis</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-house" />
            <span>Pemantauan Bandar</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-box" />
            <span>3D/Virtual Reality</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-cloud-drizzle" />
            <span>Cerapan Data Secara Real Time</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-people" />
            <span>Persepsi Penduduk</span>
          </a>
        </li>
        <li className="nav-heading">PENYELIDIKAN DAN PEMBANGUNAN</li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-bounding-box" />
            <span>Analysis</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-bricks" />
            <span>Input Pakar</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#datarepositori-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-hdd-network" />
            <span>Data Repositori</span>
            <i className="bi bi-chevron-down ms-auto" />
          </a>
          <ul
            id="datarepositori-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="icons-bootstrap.html">
                <i className="bi bi-circle" />
                <span>Senarai Data Repositori</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-graph-down" />
            <span>Analitik, Analisis and Algoritma</span>
          </a>
        </li>
        <li className="nav-heading">DASHBOARD URBAN OBSERVARTORY</li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-globe2" />
            <span>Global</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-map" />
            <span>Nasional</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-image-alt" />
            <span>Wilayah</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-signpost-2" />
            <span>Negeri</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-signpost-split" />
            <span>Tempatan</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-blank.html">
            <i className="bi bi-signpost" />
            <span>Desa</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
