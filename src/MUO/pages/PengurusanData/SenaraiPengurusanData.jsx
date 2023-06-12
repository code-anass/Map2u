import React from "react";
import Badge from 'react-bootstrap/Badge';
import DataTable from "react-data-table-component";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
import FooterContent from "../../components/FooterContent/FooterContent";
import AngleSvg from "../../assets/images/bg-angles.svg";
import { useNavigate } from "react-router-dom";

const SenaraiPengurusanData = () => {
    const navigate = useNavigate();

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
            <HeaderContent title="Pengurusan Data" titleBreadcrumb="Pengurusan Data" />
            <div
                className="d-flex justify-content-center"
                style={{ marginTop: "-100px" }}
            >
                <div className="card p-3" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                    <div className="d-flex justify-content-start mb-3">
                        {/* <button className="btn btn-success" onClick={() => navigate("/tambahPengguna")}>Tambah Pengguna</button> */}
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#tambahModal">Tambah</button>
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
                                name: "Tajuk Data",
                                selector: "tajukData",
                                sortable: true,
                                width: "20%",
                            },
                            {
                                name: "Keterangan",
                                selector: "keterangan",
                                sortable: true,
                                width: "35%",
                            },
                            {
                                name: "Tarikh",
                                selector: "tarikh",
                                sortable: true,
                                width: "20%",
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
                                tajukData: "Sempadan Daerah Malaysia",
                                keterangan: "Data ini memaparkan maklumat sempadan daerah di Malaysia.",
                                tarikh: "2022-09-14 22:04:11",
                                status:
                                    <Badge pill bg="success">
                                        Active
                                    </Badge>,
                            },

                            {
                                id: "2",
                                tajukData: "Sempadan Bandar Malaysia",
                                keterangan: "Data ini memaparkan maklumat sempadan pembangunan bandar atau pekan di Malaysia.",
                                tarikh: "2022-09-18 04:27:35",
                                status:
                                    <Badge pill bg="success">
                                        Active
                                    </Badge>,
                            },

                            {
                                id: "3",
                                tajukData: "Sempadan PBT Malaysia",
                                keterangan: "Data ini memaparkan maklumat sempadan Pihak Berkuasa Tempatan di Malaysia.",
                                tarikh: "2022-09-19 18:07:34",
                                status:
                                    <Badge pill bg="success">
                                        Active
                                    </Badge>,
                            },

                            {
                                id: "4",
                                tajukData: "Sempadan Mukim Malaysia",
                                keterangan: "Data ini memaparkan maklumat sempadan mukim di Malaysia.",
                                tarikh: "2022-09-19 18:31:46",
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
                <div className="modal-dialog modal-lg">
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
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <label htmlFor="tajuk" className="form-label">
                                            Tajuk Data
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tajukData"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label htmlFor="Nama" className="form-label">
                                            Keterangan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="keterangan"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label htmlFor="Nama" className="form-label">
                                            Tag
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tag"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-6 mb-2">
                                        <label htmlFor="setData" className="form-label">
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
                                        <span>Tema</span>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema1" />
                                            <label class="form-check-label" for="tema1">
                                                Kemampanan Pembangunan Spatial
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema2" />
                                            <label class="form-check-label" for="tema2">
                                                Kemakmuran Ekonomi & Dinamik
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema3" />
                                            <label class="form-check-label" for="tema3">
                                                Persekitaran Berdaya Huni & Komuniti Inklusif
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema4" />
                                            <label class="form-check-label" for="tema4">
                                                Kemampanan Alam Sekitar
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema5" />
                                            <label class="form-check-label" for="tema5">
                                                Tadbir Urus Perancangan yang Baik
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <span>Sektoral</span>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral" />
                                            <label class="form-check-label" for="tema1">
                                                Fizikal
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral2" />
                                            <label class="form-check-label" for="tema2">
                                                Ekomoni
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral3" />
                                            <label class="form-check-label" for="tema3">
                                                Sosial
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral4" />
                                            <label class="form-check-label" for="tema4">
                                                Alam Sekitar
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral5" />
                                            <label class="form-check-label" for="tema5">
                                                Tadbir Urus
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <label htmlFor="Nama" className="form-label">
                                            Tahun Data
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tahunData"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-6 mt-2">
                                        <label htmlFor="noKp" className="form-label">
                                            Sumber Data
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="sumberData"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>

                                </div>
                                <hr />
                                <div className="row">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">Lampiran</label>
                                        <input class="form-control" type="file" id="formFile" />
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
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="viewrole">
                                (Tajuk Data)
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
                                        <th>Tajuk Data</th>
                                        <td>Bilangan Pengajar dan Pelajar Politeknik Tuanku Sultanah Bahiyah Negeri Kedah</td>
                                    </tr>
                                    <tr>
                                        <th>Keterangan</th>
                                        <td>Bilangan Pengajar dan Pelajar Politeknik Tuanku Sultanah Bahiyah Mengikut Jantina Negeri Kedah Tahun 2019 hingga 2020</td>
                                    </tr>
                                    <tr>
                                        <th>Tag</th>
                                        <td>Kemampanan Pembangunan Spatial</td>
                                    </tr>
                                    <tr>
                                        <th>Sektoral</th>
                                        <td>Sektoral</td>
                                    </tr>
                                    <tr>
                                        <th>Set Data Sektoral</th>
                                        <td>Pengangkutan</td>
                                    </tr>
                                    <tr>
                                        <th>Tahun Data</th>
                                        <td>2022</td>
                                    </tr>
                                    <tr>
                                        <th>Sumber Data</th>
                                        <td>Kementrian Pendidikan Malaysia</td>
                                    </tr>
                                    <tr>
                                        <th>Nama Lapisan Data</th>
                                        <td>FASILITI DATA MBJB</td>
                                    </tr>
                                    <tr>
                                        <th>Link Servis Peta</th>
                                        <td>https://geojb.gov.my/gisserver/rest/services/GEOJB/FasilitiMBJB/MapServer?f=jsapi</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td>
                                            <Badge pill bg="success">
                                                Active
                                            </Badge>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <span>Lampiran</span>
                            <table class="table table-bordered mt-2">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "16%" }}>1.</td>
                                        <td style={{ width: "84%" }}>Contoh.csv</td>
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
                            <button type="button" className="btn btn-success" onClick={() => updateUser(1)}>
                                Kemaskini
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
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="newrole">
                                KEMASKINI PENGURUSAN DATA
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
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <label htmlFor="tajuk" className="form-label">
                                            Tajuk Data
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tajukData"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label htmlFor="Keterangan" className="form-label">
                                            Keterangan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="keterangan"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label htmlFor="tag" className="form-label">
                                            Tag
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tag"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-6 mb-2">
                                        <label htmlFor="setData" className="form-label">
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
                                        <span>Tema</span>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema1" />
                                            <label class="form-check-label" for="tema1">
                                                Kemampanan Pembangunan Spatial
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema2" />
                                            <label class="form-check-label" for="tema2">
                                                Kemakmuran Ekonomi & Dinamik
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema3" />
                                            <label class="form-check-label" for="tema3">
                                                Persekitaran Berdaya Huni & Komuniti Inklusif
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema4" />
                                            <label class="form-check-label" for="tema4">
                                                Kemampanan Alam Sekitar
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="tema5" />
                                            <label class="form-check-label" for="tema5">
                                                Tadbir Urus Perancangan yang Baik
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <span>Sektoral</span>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral1" />
                                            <label class="form-check-label" for="tema1">
                                                Fizikal
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral2" />
                                            <label class="form-check-label" for="tema2">
                                                Ekomoni
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral3" />
                                            <label class="form-check-label" for="tema3">
                                                Sosial
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral4" />
                                            <label class="form-check-label" for="tema4">
                                                Alam Sekitar
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="sektoral5" />
                                            <label class="form-check-label" for="tema5">
                                                Tadbir Urus
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <label htmlFor="Tahun Data" className="form-label">
                                            Tahun Data
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tahunData"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="col-6 mt-2">
                                        <label htmlFor="noKp" className="form-label">
                                            Sumber Data
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="sumberData"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>

                                </div>
                                <hr />
                                <div className="row">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">Lampiran</label>
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>
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

export default SenaraiPengurusanData;
