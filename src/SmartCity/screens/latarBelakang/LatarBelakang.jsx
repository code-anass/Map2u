import React, { useEffect } from "react";
import "./latarBelakang.scss";
import AOS from "aos";
// imgs section
import about from "assets/latarBelakang/about.png";
import img1 from "assets/latarBelakang/img1.png";
import img2 from "assets/latarBelakang/img2.png";
import img3 from "assets/latarBelakang/img3.png";
import img4 from "assets/latarBelakang/img4.png";
import Dewan from "assets/latarBelakang/authorities/Dewan.png";
import JohorBahru from "assets/latarBelakang/authorities/JohorBahru.png";
import PetalingJaya from "assets/latarBelakang/authorities/PetalingJaya.png";
import PerbandaranKulim from "assets/latarBelakang/authorities/PerbandaranKulim.png";
import Perbadanan from "assets/latarBelakang/authorities/Perbadanan.png";
import PulauPinang from "assets/latarBelakang/authorities/PulauPinang.png";
//end of imgs
function LatarBelakang() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="latarBelakang" data-aos="fade-up" data-aos-duration="2000">
      <h2 className="main-heading">LATAR BELAKANG</h2>
      <p className="main-heading">PLATFORM BANDAR PINTAR NEGARA</p>
      <img src={about} alt="" className="about-img" />
      <div className="matlamat-nscp">
        <h3>MATLAMAT NSCP</h3>
        <hr />
        <p>
          Platform Bandar Pintar Negara sebagai jaringan perkongsian maklumat
          dan data bandar pintar dengan Pihak Berkuasa Tempatan bagi menangani
          isu-isu perbandaran
        </p>
      </div>
      <div className="objektif" data-aos="fade-up" data-aos-duration="2000">
        <h3>OBJEKTIF NSCP</h3>
        <ol>
          <li>
            Memudahkan perkongsian data / maklumat perbandaran secara atas
            talian dalam masa sebenar (real time) melalui sumber / platform yang
            berbeza bagi mewujudkan data raya bandar pintar Negara.
          </li>
          <li>
            Membantu menganalisis data / maklumat daripada pelbagai sumber yang
            berbeza bagi membuat keputusan berasaskan data (data driven decision
            making) dengan lebih cekap berkaitan pembangunan dan pengurusan
            bandar.
          </li>
          <li>
            Memantau dan mengukur pelaksanaan serta pencapaian bandar-bandar di
            Malaysia dalam pelaksanaan inisiatif bandar pintar (selaras dengan
            ISO 37122) agar setaraf dengan bandar-bandar di peringkat
            Antarabangsa.
          </li>
          <li>
            Menyokong perancangan dan pelaksanaan Rangka Kerja Bandar Pintar
            Malaysia 2019-2025 yang telah mengenalpasti Dasar, Strategik dan
            Inisiatif bagi memenuhi hala tuju Negara untuk menjadikan
            bandar-bandar di Malaysia lebih berdaya saing serta pelaporan kepada
            Majlis Bandar Pintar Negara.
          </li>
          <li>
            Memantau pelaksanaan bandar pintar melibatkan 155 PBT melalui
            dashboard profiling Bandar Pintar Malaysia sebagai panduan kepada
            pihak Kementerian di dalam merancang dan memantau pelaksanaan
            projek/inisiatif bandar pintar di Malaysia secara lebih sistematik.
          </li>
        </ol>
      </div>
      <div className="fungsi-nscp" data-aos="fade-up" data-aos-duration="2000">
        <h3>FUNGSI NSCP</h3>
        <div className="fungsi-cards">
          <div className="card">
            <img src={img1} alt="" />
            <h5 className="text">Profil Bandar Pintar Negara</h5>
          </div>
          <div className="card">
            <img src={img2} alt="" />
            <h5 className="text">Platform Integrasi Bandar Pintar PBT</h5>
          </div>
          <div className="card">
            <img src={img3} alt="" />
            <h5 className="text">Analitik Data Raya Bandar Pintar</h5>
          </div>
          <div className="card">
            <img src={img4} alt="" />
            <h5 className="text">Repository Penarafan Bandar Pintar</h5>
          </div>
        </div>
      </div>
      <h3 className="heading-pihak" data-aos="fade-up" data-aos-duration="2000">
        PIHAK BERKUASA TEMPATAN PERINTIS BANDAR PINTAR
      </h3>
      <div className="authorities" data-aos="fade-up" data-aos-duration="2000">
        <div className="authority">
          <img src={Perbadanan} />
          <p className="title">Perbadanan Putrajaya</p>
        </div>
        <div className="authority">
          <img src={Dewan} />
          <p className="title">Dewan Bandaraya Kuala Lumpur</p>
        </div>
        <div className="authority">
          <img src={JohorBahru} />
          <p className="title">Majlis Bandaraya Johor Bahru</p>
        </div>
        <div className="authority">
          <img src={PetalingJaya} />
          <p className="title">MAJLIS BANDARAYA PETALING JAYA</p>
        </div>
        <div className="authority">
          <img src={PulauPinang} />
          <p className="title">Majlis Bandaraya Pulau Pinang</p>
        </div>
        <div className="authority">
          <img src={PerbandaranKulim} />
          <p className="title">Majlis Perbandaran Kulim</p>
        </div>
      </div>
    </div>
  );
}

export default LatarBelakang;
