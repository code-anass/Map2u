import React, { useEffect } from "react";
import "./platformIntegrasi.scss";
import AOS from "aos";
import Dewan from "../../assets/latarBelakang/authorities/Dewan.png";
import JohorBahru from "../../assets/latarBelakang/authorities/JohorBahru.png";
import PetalingJaya from "../../assets/latarBelakang/authorities/PetalingJaya.png";
import PerbandaranKulim from "../../assets/latarBelakang/authorities/PerbandaranKulim.png";
import Perbadanan from "../../assets/latarBelakang/authorities/Perbadanan.png";
import PulauPinang from "../../assets/latarBelakang/authorities/PulauPinang.png";
function PlatformIntegrasi() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="platformIntegrasi"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <h2 className="main-heading">PROFIL BANDAR PINTAR NEGARA</h2>
      <div className="profiles">
        <div className="card">
          <img src={Perbadanan} alt="" />
          <p>PERBADANAN PUTRAJAYA</p>
        </div>
        <div className="card">
          <img src={Dewan} alt="" />
          <p>DEWAN BANDARAYA KUALA LUMPUR</p>
        </div>
        <div className="card">
          <img src={JohorBahru} alt="" />
          <p>MAJLIS BANDARAYA JOHOR BAHRU</p>
        </div>
        <div className="card">
          <img src={PetalingJaya} alt="" />
          <p>MAJLIS BANDARAYA PETALING JAYA</p>
        </div>
        <div className="card">
          <img src={PulauPinang} alt="" />
          <p>MAJLIS BANDARAYA PULAU PINANG</p>
        </div>
        <div className="card">
          <img src={PerbandaranKulim} alt="" />
          <p>MAJLIS PERBANDARAN KULIM</p>
        </div>
      </div>
    </div>
  );
}

export default PlatformIntegrasi;
