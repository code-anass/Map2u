import React from "react";
import FooterContent from "components/muo/FooterContent/FooterContent";
import AngleSvg from "assets/images/bg-angles.svg";
import HeaderContent from "components/muo/HeaderContent/HeaderContent";
import ImgSetData from "assets/images/menu/datarepositori/all-the-data-folder-blue-animate.png";
import ImgPentadbiran from "assets/images/menu/datarepositori/World-amico.png";
import ImgGunaTanah from "assets/images/menu/datarepositori/Empty street-amico.png";
import ImgDemografi from "assets/images/menu/datarepositori/Team spirit-bro.png";
import ImgEkonomi from "assets/images/menu/datarepositori/Finance-rafiki.png";
import ImgSosial from "assets/images/menu/datarepositori/Life in a city-rafiki.png";
import ImgInfra from "assets/images/menu/datarepositori/Life in a city-amico.png";
import ImgPengangkutan from "assets/images/menu/datarepositori/Train-amico.png";
import ImgAlam from "assets/images/menu/datarepositori/Water drop-bro.png";
import ImgUrusTadbir from "assets/images/menu/datarepositori/Audit-amico.png";
import ImgDataAnalisis from "assets/images/menu/datarepositori/Analyze-bro.png";
import ImgLain from "assets/images/menu/datarepositori/Navigation-amico.png";


const DataRepositori = () => {

    return (
        <>
            <HeaderContent title="DATA REPOSITORI" titleBreadcrumb="DATA REPOSITORI" subtitle="Pengumpulan data agensi berdasarkan keperluan data. Data tersebut boleh dimuat naik dan dimuat turun bagi tujuan analisis melalui pelbagai perspektif dan peringkat." />
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
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center",width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgSetData} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Semua Set Data</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgPentadbiran} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Pentadbiran</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgGunaTanah} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Guna Tanah</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgDemografi} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Demografi</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgEkonomi} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Ekonomi</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgSosial} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Sosial</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgInfra} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Infrastruktur & Utiliti</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgPengangkutan} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Pengangkutan</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgAlam} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Alam Sekitar</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgUrusTadbir} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Urus Tadbir</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgDataAnalisis} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Data Analisis</h5>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-3 mb-2 animated--fade-in-up">
                            <a className="card lift" href="" style={{ textTransform:"uppercase" ,textAlign:"center", width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                                <img className="card-img-top" style={{height:"40vh",padding:"10px"}}
                                    src={ImgLain} alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">Lain-lain</h5>
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

export default DataRepositori;