import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import DataTable from "react-data-table-component";
import HeaderPengguna from "../../components/HeaderContent/HeaderPengguna";
import FooterContent from "../../components/FooterContent/FooterContent";
import AngleSvg from "../../assets/images/bg-angles.svg";
import { useNavigate } from "react-router-dom";

const SenaraiPengguna = () => {
  const navigate = useNavigate();

  //hideshow peranan pengguna
  const [state, setState] = useState("")
  const [persekutuanState, setPersekutuanState] = useState(false)
  const [negeriState, setNegeriState] = useState(false)
  const [pbtState, setPbtState] = useState(false)
  const [institusiState, setInstitusiState] = useState(false)
  const [swastaState, setSwastaState] = useState(false)

  const viewUser = (id) => {
    // open view modal
    document.getElementById("ViewModal").classList.add("show");
    document.getElementById("ViewModal").style.display = "block";
    document.getElementById("ViewModal").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  };

  const closeView = (id) => {
    // close view modal
    document.getElementById("ViewModal").classList.remove("show");
    document.getElementById("ViewModal").style.display = "none";
    document.getElementById("ViewModal").style.backgroundColor =
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
    document.getElementById("updateModal").style.backgroundColor = "rgba(0, 0, 0, 0)";
  };

  //hideshow peranan pengguna
  const hideshow = (e) => {
    console.log(e.target.value);

    if (e.target.value === "1") {
      setPersekutuanState(true)
      setNegeriState(false)
      setPbtState(false)
      setInstitusiState(false)
      setSwastaState(false)
    }

    if (e.target.value === "2") {
      setPersekutuanState(false)
      setNegeriState(true)
      setPbtState(false)
      setInstitusiState(false)
      setSwastaState(false)
    }

    if (e.target.value === "3") {
      setPersekutuanState(false)
      setNegeriState(false)
      setPbtState(true)
      setInstitusiState(false)
      setSwastaState(false)
    }

    if (e.target.value === "4") {
      setPersekutuanState(false)
      setNegeriState(false)
      setPbtState(false)
      setInstitusiState(true)
      setSwastaState(false)
    }

    if (e.target.value === "5") {
      setPersekutuanState(false)
      setNegeriState(false)
      setPbtState(false)
      setInstitusiState(false)
      setSwastaState(true)
    }

    if (e.target.value === "6") {
      setPersekutuanState(false)
      setNegeriState(false)
      setPbtState(false)
      setInstitusiState(false)
      setSwastaState(false);
    }
  };
  return (
    <>
      <HeaderPengguna title="Senarai Pengguna" titleBreadcrumb="Senarai Pengguna" subtitle="Senarai bagi semua pengguna yang berdaftar di sistem Malaysia Urban Observatory (MUO)" />
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-100px" }}
      >
        <div className="card p-3" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
          <div className="d-flex justify-content-start mb-3">
            {/* <button className="btn btn-success" onClick={() => navigate("/tambahPengguna")}>Tambah Pengguna</button> */}
            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah Pengguna</button>
          </div>
          <DataTable
            columns={[
              {
                name: "#",
                selector: "id",
                sortable: true,
                width: "5%",
              },
              {
                name: "No Kad Pengenalan",
                selector: "noKp",
                sortable: true,
                width: "15%",
              },
              {
                name: "Nama Penuh",
                selector: "nama",
                sortable: true,
                width: "25%",
              },
              {
                name: "E-mel",
                selector: "email",
                sortable: true,
                width: "20%",
              },
              {
                name: "Peranan",
                selector: "peranan",
                sortable: true,
                width: "15%",
              },
              {
                name: "Status",
                selector: "RoleValue",
                sortable: true,
                width: "10%",
              },
              {
                name: "Tindakan",
                //   selector: "action",
                sortable: true,
                cell: (row) => (
                  <>
                    <i
                      className="bi bi-eye-fill"
                      style={{
                        fontSize: "20px",
                        color: "#0061f2",
                        cursor: "pointer",
                        margin: "5px",
                      }}
                      onClick={() => viewUser(1)}
                    />
                    {' '}
                    <i
                      className="bi bi-pencil"
                      style={{
                        fontSize: "20px",
                        color: "#0061f2",
                        cursor: "pointer",
                        margin: "5px",
                      }}
                      onClick={() => updateUser(1)}
                    />
                    {' '}
                    <i
                      className="bi bi-sunglasses" //bi-sunglasses bi-binoculars
                      style={{
                        fontSize: "20px",
                        color: "#0061f2",
                        cursor: "pointer",
                        margin: "5px",
                      }}
                      onClick={() => console.log("test")}
                    />
                  </>
                )
              },
            ]}
            data={[
              {
                id: "1",
                noKp: "010203040506",
                nama: "Super Admin",
                email: "superadmin@gmail.com",
                peranan: "Super Admin",
                RoleValue:
                  <Badge pill bg="success">
                    Active
                  </Badge>,
              },
              {
                id: "2",
                noKp: "010101010101",
                nama: "Administrator",
                email: "muodev@map2u.com.my",
                peranan: "Super Admin",
                RoleValue:
                  <Badge pill bg="success">
                    Active
                  </Badge>,
              },
              {
                id: "3",
                noKp: "810222045277",
                nama: "Hafidz Nasruddin",
                email: "hafidz@ppj.gov.my",
                peranan: "Pengguna Awam",
                RoleValue:
                  <Badge pill bg="danger">
                    Inactive
                  </Badge>,
              },
            ]}
            pagination
            highlightOnHover
            responsive
          />
        </div>
      </div>
      {/* modal tambah pengguna */}
      <div
        className="modal fade"
        id="tambahModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newrole">
                TAMBAH PENGGUNA BAHARU
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row mb-3">
                  <div className="col-6 mb-2">
                    <label htmlFor="Peranan" className="form-label">
                      Peranan
                    </label>
                    <select className="form-select" aria-label="Default select example" required>
                      <option selected>Sila Pilih</option>
                      <option value="1">Admin</option>
                      <option value="2">Pemantau Penarafan</option>
                      <option value="3">Pentadbir Modul</option>
                    </select>
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="Status" className="form-label">
                      Status
                    </label>
                    <select className="form-select" aria-label="Default select example" required>
                      <option selected>Sila Pilih</option>
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                    </select>
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="Nama" className="form-label">
                      Nama Penuh
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="UserName"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="noKp" className="form-label">
                      No Kad Pengenalan
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="RoleValue"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="email" className="form-label">
                      E-mel
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-6 mb-2">
                    <label htmlFor="noKp" className="form-label">
                      No Telefon
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="noTel"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label for="validationCustom04" className="form-label mt-2">Kategori Pengguna</label>
                    <select className="form-select" required onChange={hideshow}>
                      <option selected disabled value="">Sila Pilih...</option>
                      <option value="1">Jabatan / Agensi / Badan Berkanun / Persekutuan</option>
                      <option value="2">Jabatan / Agensi / Badan Berkanun / Negeri</option>
                      <option value="3">Pihak Berkuasa Tempatan (PBT)</option>
                      <option value="4">Institut Pengajian Tinggi (IPT)</option>
                      <option value="5">Swasta</option>
                      <option value="6">Orang Awam</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="row mb-3">
                  <div className="col-6 mb-2">
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
                  <div className="col-6 mb-2">
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

                {/*Part : Jabatan / Agensi / Badan Berkanun / Persekutuan */}
                {
                  persekutuanState ? <div className="row">
                    <div className="col-6 mb-2">
                      <label for="Agensi/Kementerian">Agensi/Kementerian</label>
                      <input type="text" id="AgensiKementerian" className="form-control" placeholder="" />
                    </div>
                    <div className="col-6 mb-2">
                      <label for="noTelPejabat">No Telefon Pejabat</label>
                      <input type="text" id="noTelPejabat" className="form-control" placeholder="" />
                    </div>
                    <div className="col-6 mb-2">
                      <label for="kumpulanPerkhidmatan">Kumpulan Perkhidmatan</label>
                      <select id="kumpulanPerkhidmatan" className="form-control">
                        <option selected disabled value="">Sila Pilih...</option>
                        <option value="option1">Pengurusan Tertinggi</option>
                        <option value="option2">Kumpulan Profesional dan Pelaksana</option>
                        <option value="option3">Kumpulan Sokongan</option>
                      </select>
                    </div>
                    <div className="col-6 mb-2">
                      <label for="alamatPejabat">Alamat Pejabat</label>
                      <input type="text" id="alamatPejabat" className="form-control" placeholder="" />
                    </div>
                    <div className="col-6 mb-2">
                      <label for="negeri">Negeri</label>
                      <select id="negeri" className="form-control">
                        <option selected disabled value="">Sila Pilih...</option>
                        <option>Negeri Sembilan</option>
                        <option>Wilayah Persekutuan</option>
                        <option>Pulau Pinang</option>
                        <option>Johor</option>
                        <option>Pahang</option>
                        <option>Melaka</option>
                        <option>Selangor</option>
                        <option>Perak</option>
                        <option>Kedah</option>
                        <option>Perlis</option>
                        <option>Kelantan</option>
                        <option>Terengganu</option>
                        <option>Sabah</option>
                        <option>Sarawak</option>
                      </select>
                    </div>
                    <div className="col-6 mb-2">
                      <label for="poskod">Poskod</label>
                      <input type="number" id="poskod" className="form-control" placeholder="" />
                    </div>

                  </div> : <div></div>
                }
                {/*End Part : Jabatan / Agensi / Badan Berkanun / Persekutuan */}
                {/*Part : Jabatan / Agensi / Badan Berkanun / Negeri */}
                {
                  negeriState ? <div className="row">
                    <div className="col-6 mb-2">
                      <label for="Agensi/Kementerian">Agensi/Kementerian</label>
                      <input type="text" id="AgensiKementerian" className="form-control" placeholder="" />
                    </div>
                    <div className="col-6 mb-2">
                      <label for="noTelPejabat">No Telefon Pejabat</label>
                      <input type="text" id="noTelPejabat" className="form-control" placeholder="" />
                    </div>
                    <div className="col-6 mb-2">
                      <label for="kumpulanPerkhidmatan">Kumpulan Perkhidmatan</label>
                      <select id="kumpulanPerkhidmatan" className="form-control">
                        <option selected disabled value="">Sila Pilih...</option>
                        <option value="option1">Pengurusan Tertinggi</option>
                        <option value="option2">Kumpulan Profesional dan Pelaksana</option>
                        <option value="option3">Kumpulan Sokongan</option>
                      </select>
                    </div>
                    <div className="col-6 mb-2">
                      <label for="alamatPejabat">Alamat Pejabat</label>
                      <input type="text" id="alamatPejabat" className="form-control" placeholder="" />
                    </div>
                    <div className="col-6 mb-2">
                      <label for="negeri">Negeri</label>
                      <select id="negeri" className="form-control">
                        <option selected disabled value="">Sila Pilih...</option>
                        <option>Negeri Sembilan</option>
                        <option>Wilayah Persekutuan</option>
                        <option>Pulau Pinang</option>
                        <option>Johor</option>
                        <option>Pahang</option>
                        <option>Melaka</option>
                        <option>Selangor</option>
                        <option>Perak</option>
                        <option>Kedah</option>
                        <option>Perlis</option>
                        <option>Kelantan</option>
                        <option>Terengganu</option>
                        <option>Sabah</option>
                        <option>Sarawak</option>
                      </select>
                    </div>
                    <div className="col-6 mb-2">
                      <label for="poskod">Poskod</label>
                      <input type="number" id="poskod" className="form-control" placeholder="" />
                    </div>

                  </div> : <div></div>
                }
                {/*End Part : Jabatan / Agensi / Badan Berkanun / Negeri */}
                {/*Part : PBT */}
                {
                  pbtState ? <div className="row">
                    <div className="col-6">
                      <label for="select1">Pihak Berkuasa Tempatan</label>
                      <select id="select1" className="form-control">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div className="col-6 mb-2">
                      <label for="kumpulanPerkhidmatan">Kumpulan Perkhidmatan</label>
                      <select id="kumpulanPerkhidmatan" className="form-control">
                        <option selected disabled value="">Sila Pilih...</option>
                        <option value="option1">Pengurusan Tertinggi</option>
                        <option value="option2">Kumpulan Profesional dan Pelaksana</option>
                        <option value="option3">Kumpulan Sokongan</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label for="input4">Alamat Pihak Berkuasa Tempatan</label>
                      <input type="text" id="input4" className="form-control" placeholder="Enter value" />
                    </div>
                    <div className="col-6 mb-2">
                      <label for="negeri">Negeri</label>
                      <select id="negeri" className="form-control">
                        <option selected disabled value="">Sila Pilih...</option>
                        <option>Negeri Sembilan</option>
                        <option>Wilayah Persekutuan</option>
                        <option>Pulau Pinang</option>
                        <option>Johor</option>
                        <option>Pahang</option>
                        <option>Melaka</option>
                        <option>Selangor</option>
                        <option>Perak</option>
                        <option>Kedah</option>
                        <option>Perlis</option>
                        <option>Kelantan</option>
                        <option>Terengganu</option>
                        <option>Sabah</option>
                        <option>Sarawak</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label for="poskod">Poskod</label>
                      <input type="number" id="poskod" className="form-control" placeholder="" />
                    </div>

                  </div> : <div></div>
                }
                {/*End Part : PBT */}
                {/*Part : IPT */}
                {
                  institusiState ? <div className="row">
                    <div className="col-6">
                      <label for="input4">Institusi Pengajian Tinggi/Kolej</label>
                      <input type="text" id="input4" className="form-control" placeholder="" />
                    </div>
                    <div className="col-3">
                      <label for="mulaBelajar">Tahun Mula Belajar</label>
                      <input type="number" id="mulaBelajar" className="form-control" placeholder="" />
                    </div>
                    <div className="col-3">
                      <label for="akhirBelajar">Tahun Akhir Belajar</label>
                      <input type="text" id="akhirBelajar" className="form-control" placeholder="" />
                    </div>
                    <div className="col-6">
                      <label for="input4">Input 4</label>
                      <input type="text" id="input4" className="form-control" placeholder="" />
                    </div>
                    <div className="col-3">
                      <label for="validationCustom03" className="form-label mt-2">Negeri</label>
                      <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Sila Pilih...</option>
                        <option>Negeri Sembilan</option>
                        <option>Wilayah Persekutuan</option>
                        <option>Pulau Pinang</option>
                        <option>Johor</option>
                        <option>Pahang</option>
                        <option>Melaka</option>
                        <option>Selangor</option>
                        <option>Perak</option>
                        <option>Kedah</option>
                        <option>Perlis</option>
                        <option>Kelantan</option>
                        <option>Terengganu</option>
                        <option>Sabah</option>
                        <option>Sarawak</option>
                      </select>
                    </div>
                    <div className="col-3">
                      <label for="input4">Poskod</label>
                      <input type="text" id="poskod" className="form-control" placeholder="Enter value" />
                    </div>

                  </div> : <div></div>
                }
                {/*End Part : IPT */}
                {/*Part : Swasta */}
                {
                  swastaState ? <div className="row">
                    <div className="col-6">
                      <label for="input4">Nama Syarikat</label>
                      <input type="text" id="namaSyarikat" className="form-control" placeholder="Enter value" />
                    </div>
                    <div className="col-6">
                      <label for="input4">Alamat Syariakt</label>
                      <input type="text" id="alamatSyarikat" className="form-control" placeholder="Enter value" />
                    </div>
                    <div className="col-6 mb-2">
                      <label for="negeri">Negeri</label>
                      <select id="negeri" className="form-control">
                        <option selected disabled value="">Sila Pilih...</option>
                        <option>Negeri Sembilan</option>
                        <option>Wilayah Persekutuan</option>
                        <option>Pulau Pinang</option>
                        <option>Johor</option>
                        <option>Pahang</option>
                        <option>Melaka</option>
                        <option>Selangor</option>
                        <option>Perak</option>
                        <option>Kedah</option>
                        <option>Perlis</option>
                        <option>Kelantan</option>
                        <option>Terengganu</option>
                        <option>Sabah</option>
                        <option>Sarawak</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <label for="poskod">Poskod</label>
                      <input type="number" id="poskod" className="form-control" placeholder="Enter value" />
                    </div>
                    
                  </div> : <div></div>
                }
                {/*End Part : Swasta */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Tambah
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal tambah pengguna */}
      {/* modal view role */}
      <div
        className="modal fade"
        id="ViewModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="viewrole">
                PENGGUNA:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeView()}
              />
            </div>
            <div className="modal-body">
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeView()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal view role */}
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
                Close
              </button>
              <button type="button" className="btn btn-success">
                Kemaskini
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal update pengguna */}
      <FooterContent />
    </>
  );
};

export default SenaraiPengguna;
