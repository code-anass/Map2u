import React from "react";
import Badge from 'react-bootstrap/Badge';
import "../../pages/ModulUtama/ModulUtama.css"
import FooterContent from "../../components/FooterContent/FooterContent";
import AngleSvg from "assets/images/bg-angles.svg";
import HeaderMenu from "../../components/HeaderContent/HeaderMenu";
import ImgSDG from "assets/images/menu/pemantauan/sdg1.jpg";
import ImgNUA from "assets/images/menu/pemantauan/nua.png";
import ImgRFN from "assets/images/menu/pemantauan/rfn.png";
import ImgDPN from "assets/images/menu/pemantauan/dpn.png";
import ImgDPFDN from "assets/images/menu/pemantauan/dpfdn.jpg";
import ImgRFZPPN from "assets/images/menu/pemantauan/rfzppn.png";
import ImgCFS from "assets/images/menu/pemantauan/8.jpg";
import ImgIKP from "assets/images/menu/pemantauan/national.jpg";
import ImgRP from "assets/images/menu/pemantauan/4.jpg";
import ImgDashboard from "assets/images/menu/pemantauan/analytic.jpg";

const MenuPemantauan = () => {

    return (
        <>
            <HeaderMenu title="Pelaporan Dan Pemantauan Bandar Mampan" titleBreadcrumb="Menu Pemantauan" subtitle="A module provided to report on the achievements of the implementation of national and international sustainability agendas such as Sustainable Development Goals (SDGs), National Urbanization Policy (DPN) or National Physical Plan (RFN)." />
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
                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgSDG} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">Sustainable Development Goals (SDGs)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgNUA} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">New Urban Agenda (NUA)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgRFN} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">National Physical Plan (RFN)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgDPN} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">National Urbanization Policy (DPN)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgDPFDN} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">National Rural Physical Planning Policy (DPFDN)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="#" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgRFZPPN} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">National Coastal Zone Physical Plan Policy (RFZPPN)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="#" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgCFS} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">Ecological Network (CFS)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="#" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgIKP} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">Development Composite Index (IKP)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="#" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgRP} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">Development Plan (RP)</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-2 mb-2 animated--fade-in-up">
                            <a className="card lift" href="#" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{ height: "120px" }}
                                    src={ImgDashboard} alt="" />
                                <div className="card-body" style={{ height: "145px" }}>
                                    <h5 className="card-text">Achievement Dashboard</h5>
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

export default MenuPemantauan;
