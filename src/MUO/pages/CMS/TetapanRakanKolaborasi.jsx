import React, { useState }from "react";
import Badge from 'react-bootstrap/Badge';
import DataTable from "react-data-table-component";
import AngleSvg from "assets/images/bg-angles.svg";
import HeaderContent from "components/muo/HeaderContent/HeaderContent";
import FooterContent from "components/muo/FooterContent/FooterContent";

const tetapanRakanKolaborasi = () => {
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

    //   const [file, setFile] = useState();
    //   function handleChange(e) {
    //       console.log(e.target.files);
    //       setFile(URL.createObjectURL(e.target.files[0]));
    //   };

    return (
        <>
          <HeaderContent title="SENARAI RAKAN KOLABORASI" titleBreadcrumb="Senarai Rakan Kolaborasi" subtitle="MUO mempunyai rakan kolaborasi yang terdiri daripada rakan strategik , rakan pintar, enam Pihak Berkuasa Tempatan dan lain-lain bagi anjakan minda perkongsian maklumat serta perubahan Standard Operating Procedure (SOP) kerja secara berkomputer."/>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-100px" }}
          >
            <div className="card p-3" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                    <div className="d-flex justify-content-start mb-3">
                        {/* <button className="btn btn-success" onClick={() => navigate("/tambahPengguna")}>Tambah Pengguna</button> */}
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah Rakan Kolaborasi</button>
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
                                name: "Nama Agensi",
                                selector: "namaAgensi",
                                sortable: true,
                                width: "25%",
                            },
                            {
                                name: "Keterangan",
                                selector: "keterangan",
                                sortable: true,
                                width: "45%",
                            },
                            {
                                name: "Jenis Agensi",
                                selector: "jenisAgensi",
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
                                namaAgensi: "Unit Pemodenan Tadbiran dan Perancangan Pengurusan Malaysia",
                                keterangan: "Unit Pemodenan Tadbiran dan Perancangan Pengurusan Malaysia",
                                jenisAgensi:"Rakan Strategik",
                            },

                            {
                                id: "2",
                                namaAgensi: "Jabatan Perangkaan Malaysia",
                                keterangan: "Jabatan Perangkaan Malaysia",
                                jenisAgensi:"Rakan Strategik",
                            },

                            {
                                id: "3",
                                namaAgensi: "Jabatan Ukur Dan Pemetaan Malaysia",
                                keterangan: "Jabatan Ukur Dan Pemetaan Malaysia",
                                jenisAgensi:"Rakan Pintar",
                            },

                            {
                                id: "4",
                                namaAgensi: "Jabatan Kerja Raya",
                                keterangan: "Jabatan Kerja Raya",
                                jenisAgensi:"Rakan Pintar",
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
                                TAMBAH RAKAN KOLABORASI
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
                                            Nama Agensi
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
                                            Url Agensi
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
                                            Jenis Agensi
                                        </label>
                                        <select className="form-select" aria-label="Default select example" required>
                                            <option selected>Sila Pilih</option>
                                            <option value="1">Rakan Kongsi</option>
                                            <option value="2">Rakan Pintar</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="noKp" className="form-label">
                                            Keterangan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="RoleValue"
                                            aria-describedby="emailHelp"
                                        />
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
                                        <label htmlFor="logo">Logo</label>
                                        <div>
                                        <input type="file"  />
                                        <img src="" />
                                        </div>
                                    </div>
                                </div>
                                <hr />                            
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

export default tetapanRakanKolaborasi;
