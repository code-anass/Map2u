import React from "react";
import Badge from 'react-bootstrap/Badge';
import DataTable from "react-data-table-component";
import AngleSvg from "../../assets/images/bg-angles.svg";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import FooterContent from "../../components/FooterContent/FooterContent";

const tetapanBerita = () => {
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
        document.getElementById("updateModal").style.backgroundColor =
          "rgba(0, 0, 0, 0)";
      };
    return (
        <>
          <HeaderContent title="SENARAI BERITA MUO" titleBreadcrumb="Senarai Berita MUO" subtitle="Memaparkan senarai berita"/>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-100px" }}
          >
            <div className="card p-3" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                    <div className="d-flex justify-content-start mb-3">
                        {/* <button className="btn btn-success" onClick={() => navigate("/tambahPengguna")}>Tambah Pengguna</button> */}
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah Berita Baharu</button>
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
                                name: "Tajuk",
                                selector: "tajukBerita",
                                sortable: true,
                                width: "25%",
                            },
                            {
                                name: "Sub Tajuk",
                                selector: "subTajuk",
                                sortable: true,
                                width: "45%",
                            },
                            {
                                name: "Status",
                                selector: "status",
                                sortable: true,
                                width: "10%",
                            },
                            {
                                name: "Tindakan",
                                //   selector: "action",
                                sortable: true,
                                width:"10%",
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
                                            className="bi bi-trash" //bi-trash --delete
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
                                tajukBerita: "Energising Sustainability: Malaysia Pavilion at World Urban Forum 11 (WUF11)",
                                subTajuk: "",
                                status:
                                    <Badge pill bg="success">
                                        Active
                                    </Badge>,
                            },

                            {
                                id: "2",
                                tajukBerita: "Home Ownership Programme (HOPE) and Karnival Jom Beli Rumah",
                                subTajuk: "",
                                status:
                                    <Badge pill bg="success">
                                        Active
                                    </Badge>,
                            },

                            {
                                id: "3",
                                tajukBerita: "Government to involve more youths in urban agriculture: Malaysia Agriculture, Horticulture and Agrotourism (MAHA) 2022",
                                subTajuk: "",
                                status:
                                    <Badge pill bg="success">
                                        Active
                                    </Badge>,
                            },

                            {
                                id: "4",
                                tajukBerita: "	Sesi Kunjungan Hormat Pengarah Eksekutif UN-Habitat",
                                subTajuk: "",
                                status:
                                    <Badge pill bg="success">
                                        Active
                                    </Badge>,
                            },

                        ]}
                        pagination
                        highlightOnHover
                        responsive
                    />
            </div>
          </div>
                      {/* modal tambah Data */}
                      <div
                className="modal fade"
                id="tambahModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="newrole">
                                TAMBAH PENGURUSAN DATA
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
                                    <div className="col-12">
                                        <label htmlFor="Nama" className="form-label">
                                            Tajuk Data
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="UserName"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="Nama" className="form-label">
                                            Keterangan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="UserName"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="Nama" className="form-label">
                                            Tag
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="UserName"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="Status" className="form-label">
                                            Set Data Sektoral
                                        </label>
                                        <select className="form-select" aria-label="Default select example" required>
                                            <option selected>Sila Pilih</option>
                                            <option value="1">Pentadbiran</option>
                                            <option value="2">Guna tanah</option>
                                            <option value="3">Demografi</option>
                                            <option value="4">Ekonomi</option>
                                            <option value="5">Sosial</option>
                                            <option value="6">Infrastuktur & Utiliti</option>
                                            <option value="7">Pengangkutan</option>
                                            <option value="8">Alam Sekitar</option>
                                            <option value="9">Tadbir Urus</option>
                                            <option value="10">Data Analisis</option>
                                            <option value="11">Lain-Lain</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="Status" className="form-label">
                                            Status
                                        </label>
                                        <select className="form-select" aria-label="Default select example" required>
                                            <option selected>Sila Pilih</option>
                                            <option value="1">Active</option>
                                            <option value="2">Inactive</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="Nama" className="form-label">
                                            Tahun Data
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="UserName"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="noKp" className="form-label">
                                            Sumber Data
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="RoleValue"
                                            aria-describedby="emailHelp"
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
            {/* end modal tambah Data */}
            {/* modal view data */}
            <div
                className="modal fade"
                id="ViewModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
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
            {/* modal view data */}
            {/* modal update data */}
            <div
                className="modal fade"
                id="updateModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
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
            {/* end modal update data */}
          <FooterContent />
        </>
      );
};

export default tetapanBerita;
