import React, { useState } from "react";
import profileImage from "assets/images/profile-img.jpg";
import logo from "assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "store/actions";

const Navbar = () => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  let dropdownVisible = false;

  const handleToggleSidebar = () => {
    // sidebar scroll to left
    const sidebar = document.getElementById("sidebar");

    sidebar.classList.toggle("sidebarscroll");

    const main = document.getElementById("main");

    if (state) {
      main.style.marginLeft = "250px";
      setState(false);
    } else {
      main.style.marginLeft = "0px";
      setState(true);
    }
  };

  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img
              src={logo}
              alt="logo_muo"
              style={{ width: "50px", transform: "scale(1.5)" }}
            />
          </a>
          <i
            className="bi bi-list toggle-sidebar-btn"
            onClick={handleToggleSidebar}
          />
        </div>
        {/* End Logo */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search" />
              </a>
            </li>
            {/* End Search Icon*/}
            <li className="nav-item dropdown" style={{ position: "relative" }}>
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="hover"
                style={{transform: "scaleX(-1)"}}
                
                onClick={(e) => {
                  e.preventDefault();
                  const dropdown = document.querySelector(".dropdown-menu");

                  if (dropdownVisible) {
                    dropdown.classList.remove("show");
                    dropdownVisible = false;
                  } else {
                    dropdown.classList.add("show");
                    dropdownVisible = true;
                  }
                }}
              >
                <i className="bi bi-bell" style={{ color: "#fff" }} />
              </a>
                <span className="badge bg-primary badge-number">4</span>
              {/* End Notification Icon */}
              <ul
                className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications"
                style={{ position: "absolute", right: "40%" }}
              >
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning" />
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger" />
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success" />
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary" />
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
              {/* End Notification Dropdown Items */}
            </li>
            {/* End Notification Nav */}
            <li
              className="nav-item dropdown pe-3"
              style={{ position: "relative" }}
            >
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="hover"
                onClick={(e) => {
                  e.preventDefault();
                  const dropdown = document.querySelector("#profile_menu");

                  if (dropdownVisible) {
                    dropdown.classList.remove("show");
                    dropdownVisible = false;
                  } else {
                    dropdown.classList.add("show");
                    dropdownVisible = true;
                  }
                }}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span
                  className="d-none d-md-block dropdown-toggle ps-2"
                  style={{ color: "#fff" }}
                >
                  Super Admin
                </span>
              </a>
              {/* End Profile Iamge Icon */}
              <ul
                className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
                id="profile_menu"
                style={{ position: "absolute", right: "24%" }}
              >
                <li className="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="/profilePengguna"
                  >
                    <i className="bi bi-person" />
                    <span>My Account</span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-gear" />
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle" />
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="/login"
                  >
                    <i className="bi bi-box-arrow-right" />
                    <a href="#" onClick={() => dispatch(setAuth(false))}>
                      <span>Log Out</span>
                    </a>
                  </Link>
                </li>
              </ul>
              {/* End Profile Dropdown Items */}
            </li>
            {/* End Profile Nav */}
          </ul>
        </nav>
        {/* End Icons Navigation */}
      </header>
    </>
  );
};

export default Navbar;
