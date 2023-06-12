import React from "react";
import "../../pages/ModulUtama/ModulUtama.css"
import FooterContent from "../../components/FooterContent/FooterContent";
import AngleSvg from "../../assets/images/bg-angles.svg";
import HeaderMenu from "../../components/HeaderContent/HeaderMenu";
import ImgAnalisis from "../../assets/images/menu/penyelidikan/data-points-animate.png";
import ImgLyerList from "../../assets/images/menu/sokongan/all-the-data-folder-blue-animate.png";
import ImgCriteria from "../../assets/images/menu/sokongan/critical-thinking-animate.png";
import ImgRating from "../../assets/images/menu/sokongan/preferences-animate.png";
import ImgFormula from "../../assets/images/menu/sokongan/mathematics-animate.png";
import ImgReporting from "../../assets/images/menu/sokongan/data-report-animate.png";
import ImgResults from "../../assets/images/menu/sokongan/analytivs-animate.png";
const MenuSokongan = () => {

    return (
        <>
            <HeaderMenu title="Sokongan Membuat Keputusan" titleBreadcrumb="Menu Sokongan Membuat Keputusan" subtitle="Membolehkan pengguna melakukan analisis dan analisis dengan mudah. Modul ini mempunyai keupayaan untuk mengubah suai kriteria, model, algoritma atau formula yang digunakan dalam modul penyelidikan dan pembangunan." />
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
                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh"}}
                                    src={ImgAnalisis} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Analysis</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh"}}
                                    src={ImgLyerList} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Layer List</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh"}}
                                    src={ImgCriteria} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Criteria</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh"}}
                                    src={ImgRating} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Rating</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgFormula} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Formula</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgReporting} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Reporting</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgResults} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Results</h5>
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

export default MenuSokongan;