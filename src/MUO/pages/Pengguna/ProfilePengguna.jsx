import React from "react";
import Badge from 'react-bootstrap/Badge';
import DataTable from "react-data-table-component";
import HeaderPengguna from "components/muo/HeaderContent/HeaderPengguna";
import FooterContent from "components/muo/FooterContent/FooterContent";
import AngleSvg from "assets/images/bg-angles.svg";
import profileImg from "assets/images/profile-img.jpg";
import { useNavigate } from "react-router-dom";

const ProfilePengguna = () => {
  const navigate = useNavigate();

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

  const updateUser = (id) => {
    // open view modal
    document.getElementById("updateModal").classList.add("show");
    document.getElementById("updateModal").style.display = "block";
    document.getElementById("updateModal").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  };

  const closeUpdate = (id) => {
    // close view modal
    document.getElementById("updateModal").classList.remove("show");
    document.getElementById("updateModal").style.display = "none";
    document.getElementById("updateModal").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  };
  return (
    <>
      <HeaderPengguna title="Profil : (Nama Pengguna)" titleBreadcrumb="Profil : (Nama Pengguna)"/>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-100px" }}
      >
        <div className="card p-3" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
          <div className="d-flex justify-content-start mb-3">
            {/* <button className="btn btn-success" onClick={() => navigate("/tambahPengguna")}>Tambah Pengguna</button> */}
            <button className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={() => updateUser(1)}>Kemaskini</button>
            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#resetModal">Reset Kata Laluan</button>

          </div>
          <div className="row">
            <div className="col-md-8">
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>No Kad Pengenalan</th>
                    <td>010203040506</td>
                  </tr>
                  <tr>
                    <th>Nama Penuh</th>
                    <td>Super Admin</td>
                  </tr>
                  <tr>
                    <th>Peranan Pengguna</th>
                    <td>Super Admin</td>
                  </tr>
                  <tr>
                    <th>E-mel</th>
                    <td>superadmin@gmail.com</td>
                  </tr>
                  <tr>
                    <th>No Telefon</th>
                    <td>0123456789</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>
                      <Badge pill bg="success">
                        Active
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <th>Kategori Pengguna</th>
                    <td>- None -</td>
                  </tr>
                  <tr>
                    <th>Institusi Pengajian Tinggi/Kolej</th>
                    <td>- None -</td>
                  </tr>
                  <tr>
                    <th>Tahun Mula Belajar</th>
                    <td>- None -</td>
                  </tr>
                  <tr>
                    <th>Tahun Akhir Belajar</th>
                    <td>- None -</td>
                  </tr>
                  <tr>
                    <th>Alamat</th>
                    <td>- None -</td>
                  </tr>
                  <tr>
                    <th>Cipta Pada</th>
                    <td>07-06-2022 23:32:10</td>
                  </tr>
                  <tr>
                    <th>Kemaskini Pada</th>
                    <td>18-04-2023 21:54:45</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <div>
              <img src={profileImg} style={{width:"100%"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal update pengguna */}
      <div
        className="modal fade"
        id="updateModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newrole">
                PENGGUNA:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeUpdate()}
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row mb-3">
                  <div className="col-6">
                    <label htmlFor="Peranan" className="form-label">
                      Peranan
                    </label>
                    <select className="form-select" aria-label="Default select example" required>
                      <option selected>Sila Pilih</option>
                      <option value="1" selected>Admin</option>
                      <option value="2">Pemantau Penarafan</option>
                      <option value="3">Pentadbir Modul</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="Status" className="form-label">
                      Status
                    </label>
                    <select className="form-select" aria-label="Default select example" required>
                      <option selected>Sila Pilih</option>
                      <option value="1" selected>Active</option>
                      <option value="2">Inactive</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="Nama" className="form-label">
                      Nama Penuh
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="UserName"
                      aria-describedby="emailHelp"
                      value={'Super Admin'}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="noKp" className="form-label">
                      No Kad Pengenalan
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="RoleValue"
                      aria-describedby="emailHelp"
                      value={'010203040506'}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="email" className="form-label">
                      E-mel
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      value={'superadmin@gmail.com'}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="noKp" className="form-label">
                      No Telefon
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="noTel"
                      aria-describedby="emailHelp"
                      value={'0123456789'}
                    />
                  </div>
                </div>
                <hr />
                <div className="row mb-3">
                  <div className="col-6">
                    <label htmlFor="noKp" className="form-label">
                      Kata Laluan
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="noKp" className="form-label">
                      Kata Laluan Semula
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <hr />
                <div className="col">
                  <label htmlFor="Peranan" className="form-label">
                    Peranan
                  </label>
                  <select className="form-select" aria-label="Default select example" required>
                    <option selected>Sila Pilih</option>
                    <option value="1" selected>Admin</option>
                    <option value="2">Pemantau Penarafan</option>
                    <option value="3">Pentadbir Modul</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeUpdate()}
              >
                Tutup
              </button>
              <button type="button" className="btn btn-success">
                Kemaskini
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal update pengguna */}

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
                    <label htmlFor="noKp" className="form-label">
                      No Kad Pengenalan
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="RoleValue"
                      aria-describedby="emailHelp"
                      value={'010203040506'}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="noKp" className="form-label">
                      Kata Laluan Lama
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="emailHelp"
                    />
                  </div>                                
                </div>
                <hr />
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor="noKp" className="form-label">
                      Kata Laluan Baharu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="noKp" className="form-label">
                      Sahkan Kata Laluan
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="emailHelp"
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
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal reset pengguna */}
      <FooterContent />
    </>
  );
};

export default ProfilePengguna;
