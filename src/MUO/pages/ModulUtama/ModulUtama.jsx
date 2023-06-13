import React from "react";
import Badge from 'react-bootstrap/Badge';
import { NavLink, Link } from "react-router-dom";
import "./ModulUtama.css"
import FooterContent from "components/muo/FooterContent/FooterContent";
import AngleSvg from "assets/images/bg-angles.svg";
import HeaderContent from "components/muo/HeaderContent/HeaderContent";
import ImgPemantauan from "assets/images/Modulutama/malaysia-kuala-lumpur-timelapse-road-buildings-sunset-sky-clouds-city-7025.jpg";
import ImgGeoHub from "assets/images/Modulutama/gis.jpg";
import ImgUO from "assets/images/Modulutama/uo-bg.jpg";
import ImgMaklumatBandar from "assets/images/Modulutama/wall1.jpg";
import ImgRnD from "assets/images/Modulutama/putrajaya1.png";
import ImgSokongan from "assets/images/Modulutama/11.-Putrajaya-PPT-Design-LAAB-Series.jpg";
import ImgBandarPintar from "assets/images/Modulutama/Smart-City-700x467.png";
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setAuth} from 'store/actions';

const ModulUtama = () => {
    const dispatch = useDispatch();

    return (
        <>
            <HeaderContent title="Selamat Datang (User Id)" titleBreadcrumb="Modul Utama" subtitle="Fungsi utama MUO akan menjadi pusat data nasional, rujukan, pemantauan dan pelaporan yang akan memantau tahap kesejahteraan dan kelestarian bandar di Malaysia melalui aspek sosial, fizikal, ekonomi dan alam sekitar."/>
            <div
                className="d-flex justify-content-center"
                style={{ marginTop: "-100px" }}
            >
                <div className="card p-3" style={{ width: "98%", backgroundImage: `url(${AngleSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
                    <div className="d-flex justify-content-start">
                        Modul Utama
                    </div>
                    <hr />
                    <div className="row">
                        <div className="gridywrap">
                            <div className="gridy-2 gridyhe-1 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="gridimg" style={{ backgroundImage: `url(${ImgPemantauan})` }}>&nbsp;</div>

                                <div className="gridinfo">
                                    <h3>PELAPORAN DAN PEMANTAUAN BANDAR MAMPAN</h3>
                                    <p className="gridexerpt mb-1">Modul yang disediakan untuk melaporkan pencapaian pelaksanaan agenda kelestarian negara dan antarabangsa seperti Matlamat Pembangunan Lestari (SDG), Dasar Perbandaran Negara (DPN) atau Rancangan Fizikal Negara (RFN).</p>
                                    <Link className="btn btn-primary" to="/menuPemantauan">
                                        <span>MULA</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="gridy-1 gridyhe-1 wow fadeInRight" data-wow-delay="0.2s">
                                <div className="gridimg" style={{ backgroundImage: `url(${ImgGeoHub})` }}>&nbsp;</div>

                                <div className="gridinfo">
                                    <h3>GEOHUB</h3>
                                    <p className="gridexerpt mb-1">Modul hub perkongsian maklumat dan data tersedia dalam pangkalan data bersepadu MUO. Modul ini menyediakan platform perkongsian maklumat dalam talian kepada pelbagai peringkat pengguna.</p>
                                    <a href="https://www.map2uapps.com/portal/apps/sites/#/muo-geohub" target="_blank" className="btn btn-primary">MULA</a>
                                </div>
                            </div>
                            <div className="gridy-1 gridyhe-1 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="gridimg" style={{ backgroundImage: `url(${ImgUO})` }}>&nbsp;</div>

                                <div className="gridinfo">
                                    <h3>DASHBOARD URBAN OBSERVATORY</h3>
                                    <p className="gridexerpt mb-1">Ciri yang mampu melaksanakan geo-analisis dengan cepat, mesra pengguna, papan pemuka pintar dan mudah dikongsi.</p>
                                    <a href="" className="btn btn-primary">MULA</a>
                                </div>
                            </div>
                            <div className="gridy-2 gridyhe-1 wow fadeInRight" data-wow-delay="0.2s">
                                <div className="gridimg" style={{ backgroundImage: `url(${ImgMaklumatBandar})` }}>&nbsp;</div>

                                <div className="gridinfo">
                                    <h3>MAKLUMAT BANDAR</h3>
                                    <p className="gridexerpt mb-1">Papan pemuka dan visualisasi, peta cerita dan pelan interaktif yang merangkumi aspek fizikal seperti penggunaan tanah dan penempatan bandar, dsb.</p>
                                    <a href="" className="btn btn-primary">MULA</a>
                                </div>
                            </div>
                            <div className="gridy-1 gridyhe-1 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="gridimg" style={{ backgroundImage: `url(${ImgRnD})` }}>&nbsp;</div>
                                <div className="gridinfo">
                                    <h3>PENYELIDIKAN DAN PEMBANGUNAN</h3>
                                    <p className="gridexerpt mb-1">Membantu pelbagai pihak untuk melaksanakan proses penyelidikan dan membina dan menguji model yang berkaitan dengan penyelidikan dan pembangunan isu perbandaran.</p>
                                    <Link className="btn btn-primary" to="/menuPenyelidikan">
                                        <span>MULA</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="gridy-1 gridyhe-1 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="gridimg" style={{ backgroundImage: `url(${ImgSokongan})` }}>&nbsp;</div>

                                <div className="gridinfo">
                                    <h3>SOKONGAN MEMBUAT KEPUTUSAN</h3>
                                    <p className="gridexerpt mb-1">Membolehkan pengguna melakukan analisis dan analisis dengan mudah. Modul ini mempunyai keupayaan untuk mengubah suai kriteria, model, algoritma atau formula yang digunakan dalam modul penyelidikan dan pembangunan.</p>
                                    <Link className="btn btn-primary" to="/menuSokongan">
                                        <span>MULA</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="gridy-1 gridyhe-1 wow fadeInRight" data-wow-delay="0.2s">
                                <div className="gridimg" style={{ backgroundImage: `url(${ImgBandarPintar})` }}>&nbsp;</div>

                                <div className="gridinfo">
                                    <h3>PLATFORM BANDAR PINTAR NEGARA</h3>
                                    <p className="gridexerpt mb-1">Membantu dalam menganalisis data / maklumat daripada pelbagai sumber yang berbeza untuk membuat keputusan.</p>
                                    <a href="" className="btn btn-primary" onClick={() => dispatch(setAuth(true))}>MULA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end modal reset pengguna */}
            <FooterContent />
        </>
    );
};

export default ModulUtama;
