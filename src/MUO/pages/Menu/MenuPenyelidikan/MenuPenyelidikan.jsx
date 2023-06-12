import React from "react";
import { NavLink, Link } from "react-router-dom";
import FooterContent from "../../../components/FooterContent/FooterContent";
import AngleSvg from "../../../assets/images/bg-angles.svg";
import HeaderMenu from "../../../components/HeaderContent/HeaderMenu";
import ImgAnalisis from "../../../assets/images/menu/penyelidikan/data-points-animate.png";
import ImgInptPakar from "../../../assets/images/menu/penyelidikan/digital-presentation-animate.png";
import ImgDataRepositori from "../../../assets/images/menu/penyelidikan/floppy-disk-animate.png";
import ImgAnalitic from "../../../assets/images/menu/penyelidikan/problem-solving-animate.png";

const MenuPenyelidikan = () => {

    return (
        <>
            <HeaderMenu title="PENYELIDIKAN DAN PEMBANGUNAN" titleBreadcrumb="Menu Penyelidikan Dan Pembangunan" subtitle="Membantu pelbagai pihak untuk melaksanakan proses penyelidikan dan membina dan menguji model yang berkaitan dengan penyelidikan dan pembangunan isu perbandaran." />
            <div
                className="d-flex justify-content-center"
                style={{ marginTop: "-100px" }}
            >
                <div className="card p-3" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                    <div className="d-flex justify-content-start">
                        Sub Modul
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh"}}
                                    src={ImgAnalisis} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Analisis</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col mb-2 animated--fade-in-up">
                        {/* <Link to="/dataRepositori" className="card lift" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}> */}
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh"}}
                                    src={ImgInptPakar} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Input Pakar</h5>
                                </div>
                            </a>
                        {/* </Link> */}
                        </div>

                        <div className="col mb-2 animated--fade-in-up">
                        <Link to="/dataRepositori" className="card lift" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                            {/* <a className="card lift" href="/dataRepositori" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}> */}
                                <img className="card-img-top" style={{height:"40vh"}}
                                    src={ImgDataRepositori} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Data Repositori</h5>
                                </div>
                            {/* </a> */}
                            </Link>
                        </div>

                        <div className="col mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh"}}
                                    src={ImgAnalitic} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Analitis,Analisis dan Algoritma</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* end modal reset pengguna */}
            <FooterContent />
        </>
    );
};

export default MenuPenyelidikan;