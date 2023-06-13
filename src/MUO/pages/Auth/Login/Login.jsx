import React, { useState } from "react";
import logo from "assets/images/login_logo_sm.png";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setAuth} from 'store/actions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [kp, setKp] = useState("");
  const [password, setPassword] = useState("");

  const resetPassword = (id) => {
    // open view modal
    document.getElementById("resetModal").classList.add("show");
    document.getElementById("resetModal").style.display = "block";
    document.getElementById("resetModal").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  };

  const closeResetPassword = (id) => {
    // close view modal
    document.getElementById("resetModal").classList.remove("show");
    document.getElementById("resetModal").style.display = "none";
    document.getElementById("resetModal").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  };

  return (
    <div className="login">
      <Link
        className="bi bi-house-fill home-icon"
        style={{ fontSize: "35px", color: "grey" }}
        to="/login"
      ></Link>
      <div className="row justify-content-center">
        <div className="col">
          <div className="loginLogo">
            <img src={logo} />
          </div>
        </div>

        <div className="col">
          <div className="card login-card">
            <Link
              className="bi bi-arrow-left-circle-fill"
              style={{
                fontSize: "35px",
                color: "grey",
                position: "absolute",
                left: "24px",
                top: "10px",
              }}
              to="/login"
            ></Link>
            <div className="card-body form-login p-5">
              <h5 className="card-title">LOG MASUK</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Sila isi maklumat di bawah
              </h6>
              <form>
                <div className="row">
                  <label>No Kad Pengenalan</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sila masukkan kad pengenalan"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setKp(e.target.value)}
                      value={kp}
                    />
                  </div>
                  <label>Kata Laluan</label>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Sila masukkan kata laluan"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                </div>
                <p className="login-subtext">
                  <i>
                    Nota: Minimum lapan aksara, sekurang-kurangnya satu huruf
                    besar, satu huruf kecil, satu nombor dan satu aksara khas.
                  </i>{" "}
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Ingat saya
                  </label>
                </div>
                <p className="login-subtext mt-2">
                  <i>
                    Lupa kata laluan?{" "}
                    <a
                      style={{ color: "blue", cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#resetModal"
                    >
                      Sila Reset Semula
                    </a>
                  </i>{" "}
                </p>
                <div className="row mt-3">
                  <button onClick={()=> dispatch(setAuth(true))} className="btn btn-md btn-block btn-primary waves-effect waves-light custom-btn-blue">
                    Log Masuk
                  </button>
                  <Link
                    className="btn btn-md btn-block btn-primary waves-effect waves-light custom-btn-blue mt-2"
                    to="/dashboard"
                  >
                    Pendaftaran Baharu
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-3">
              <div className="custom-circle"></div>
              <div className="custom-circle"></div>
              <div className="custom-circle"></div>
            </div>
          </div>
        </div>

        {/* modal reset pengguna */}
        <div
          className="modal fade"
          id="resetModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="newrole">
                  RESET KATA LALUAN:
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => closeResetPassword()}
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-12">
                      <p>
                        Masukkan emel anda dan arahan untuk reset katalaluan
                        akan dihantar:
                      </p>
                    </div>
                    <div className="col-12">
                      <label htmlFor="noKp" className="form-label">
                        Email
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        aria-describedby="emailHelp"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => closeResetPassword()}
                >
                  Tutup
                </button>
                <button type="button" className="btn btn-success">
                  Hantar
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end modal reset pengguna */}
      </div>
    </div>
  );
};

export default Login;
