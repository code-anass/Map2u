import React, { useState } from "react";
import logo from "../../../assets/images/login_logo_sm.png";
import { NavLink, Link } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";

const Register = () => {
    const [state, setState] = useState("")
    const [persekutuanState, setPersekutuanState] = useState(false)
    const [negeriState, setNegeriState] = useState(false)
    const [pbtState, setPbtState] = useState(false)
    const [institusiState, setInstitusiState] = useState(false)
    const [swastaState, setSwastaState] = useState(false)

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
    // Initialize a boolean state
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };


    return (
        <div className="login">
            <Link className="bi bi-house-fill home-icon" style={{ fontSize: "35px", color: "grey" }}
                to="/dashboard">
            </Link>
            <div className="row justify-content-center">
                <div className="col">
                    <div className="loginLogo">
                        <img src={logo} />
                    </div>
                </div>

                <div className="col pe-3">

                    <div className="card register-card">
                        <Link className="bi bi-arrow-left-circle-fill" style={{
                            fontSize: "35px",
                            color: "grey",
                            position: "absolute",
                            left: "24px",
                            top: "10px",
                        }}
                            to="/login">
                        </Link>
                        <div className="card-body form-register p-5">
                            <h5 className="card-title pb-1">PENDAFTARAN BAHARU</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Jika sudah mendaftar, sila log masuk disini Daftar Masuk.</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Sila isi maklumat anda</h6>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="validationCustom01" className="form-label mt-2">Nama Penuh</label>
                                        <input type="text" className="form-control" id="validationCustom01" placeholder="Sila isi nama penuh anda" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="validationCustom02" className="form-label mt-2">No Kad Pengenalan</label>
                                        <input type="text" className="form-control" id="validationCustom02" placeholder="Sila isi no kad pengenalan anda" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="validationCustomUsername" className="form-label mt-2">No Tel</label>
                                        <div className="input-group has-validation">
                                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="Sila isi no tel anda"
                                                required />
                                            <div className="invalid-feedback">
                                                Please enter a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="validationCustom03" className="form-label mt-2">Email</label>
                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Sila isi alamat emel anda" required />
                                        <div className="invalid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="validationCustom05" className="form-label mt-2">Kata Laluan</label>
                                        <input type={passwordShown ? "text" : "password"} className="form-control" id="validationCustom05" placeholder="Sila isi kata laluan anda" required />
                                        <div className="invalid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div className="col-md-6">
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

                                    <div className="col-12">
                                        <div className="form-check mt-3">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" onClick={togglePassword} required />
                                            <label className="form-check-label" for="invalidCheck">
                                                Tunjuk kata laluan
                                            </label>
                                            <div className="invalid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        {/*PILIHAN : PERSEKUTUAN */}
                                        {
                                            persekutuanState ? <div className="row pb-2" id="persekutuan">
                                                <div className="col-6">
                                                    <label for="validationCustom03" className="form-label mt-2">Agensi/Kementerian</label>
                                                    <input type="text" className="form-control" id="validationCustom03" placeholder="Agensi/Kementerian" required />
                                                </div>
                                                <div className="col-6">
                                                    <label for="validationCustom03" className="form-label mt-2">Kumpulan Perkhidmatan</label>
                                                    <select className="form-select" id="validationCustom04" required>
                                                        <option selected disabled value="">Sila Pilih...</option>
                                                        <option>Pengurusan Tertinggi</option>
                                                        <option>Kumpulan Profesional dan Pelaksana</option>
                                                        <option>Kumpulan Sokongan</option>
                                                    </select>
                                                </div>
                                            </div> : <div></div>
                                        }
                                        {/* END OF PILIHAN : PERSEKUTUAN */}
                                        {/*PILIHAN : NEGERI */}
                                        {
                                            negeriState ?
                                                <div className="row pb-2" id="negeri">
                                                    <div className="col-6">
                                                        <label for="validationCustom03" className="form-label mt-2">Agensi/Kementerian</label>
                                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Agensi/Kementerian" required />
                                                    </div>
                                                    <div className="col-6">
                                                        <label for="validationCustom03" className="form-label mt-2">Kumpulan Perkhidmatan</label>
                                                        <select className="form-select" id="validationCustom04" required>
                                                            <option selected disabled value="">Sila Pilih...</option>
                                                            <option>Pengurusan Tertinggi</option>
                                                            <option>Kumpulan Profesional dan Pelaksana</option>
                                                            <option>Kumpulan Sokongan</option>
                                                        </select>
                                                    </div>
                                                </div> : <div></div>
                                        }
                                        {/* END OF PILIHAN : NEGERI */}
                                        {/*PILIHAN : PBT */}
                                        {
                                            pbtState ?
                                                <div className="row pb-2" id="pbt">
                                                    <div className="col-6">
                                                        <label for="validationCustom03" className="form-label mt-2">Pihak Berkuasa Tempatan</label>
                                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Sila isi maklumat Pihak Berkuasa Tempatan" required />
                                                    </div>
                                                    <div className="col-6">
                                                        <label for="validationCustom03" className="form-label mt-2">Kumpulan Perkhidmatan</label>
                                                        <select className="form-select" id="validationCustom04" required>
                                                            <option selected disabled value="">Sila Pilih...</option>
                                                            <option>Pengurusan Tertinggi</option>
                                                            <option>Kumpulan Profesional dan Pelaksana</option>
                                                            <option>Kumpulan Sokongan</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-6">
                                                        <label for="validationCustom03" className="form-label mt-2">Kategori PBT</label>
                                                        <select className="form-select" id="validationCustom04" required>
                                                            <option selected disabled value="">Sila Pilih...</option>
                                                            <option>List PBT tarik table nanti..panjang sangat sksk</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-6">
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
                                                </div> : <div></div>
                                        }
                                        {/* END OF PILIHAN : PBT */}
                                        {/*PILIHAN : INSTITUSI */}
                                        {
                                            institusiState ?
                                                <div className="row pb-2" id="institusi">
                                                    <div className="col-6">
                                                        <label for="validationCustom03" className="form-label mt-2">Institusi Pengajian Tinggi/Kolej</label>
                                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Sila isi nama IPT" required />
                                                    </div>
                                                    <div className="col-3">
                                                        <label for="validationCustom03" className="form-label mt-2">Tahun Mula Belajar</label>
                                                        <input type="number" className="form-control" id="validationCustom03" placeholder="Sila isi alamat emel anda" required />
                                                    </div>
                                                    <div className="col-3">
                                                        <label for="validationCustom03" className="form-label mt-2">Tahun Akhir Belajar</label>
                                                        <input type="number" className="form-control" id="validationCustom03" placeholder="Sila isi alamat emel anda" required />
                                                    </div>
                                                </div> : <div></div>
                                        }
                                        {/* END OF PILIHAN : INSTITUSI */}
                                        {/*PILIHAN : SWASTA */}
                                        {
                                            swastaState ?
                                                <div className="row pb-2" id="swasta">
                                                    <div className="col-6">
                                                        <label for="validationCustom03" className="form-label mt-2">Nama Syarikat</label>
                                                        <input type="text" className="form-control" id="validationCustom03" placeholder="Sila isi nama syarikat" required />
                                                    </div>
                                                    <div className="col-6">
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
                                                </div> : <div></div>
                                        }
                                        {/* END OF PILIHAN : SWASTA */}
                                    </div>


                                    <Link
                                        className="btn btn-md btn-block btn-primary waves-effect waves-light custom-btn-blue mt-2"
                                        to="/login"
                                    >
                                        Daftar
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

            </div>
        </div>
    );

}

export default Register;
