import React, { useEffect } from "react";
import "./kategoryPenarafan.scss";
import AOS from "aos";
import bronz from "assets/repositoryPenarafan/bronz.png";
import silver from "assets/repositoryPenarafan/silver.png";
import gold from "assets/repositoryPenarafan/gold.png";
import platinium from "assets/repositoryPenarafan/platinium.png";
function KategoryPenarafan() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="kategoryPenarafan"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <h3 className="heading-main">KATEGORI PENARAFAN BANDAR PINTAR</h3>
      <div className="cards">
        <div
          className="card bronz-border"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className="first">
            <p>Smart City Early Adopter</p>
            <p>
              <b>BRONZE</b>
            </p>
            <img src={bronz} />
          </div>
          <div className="second bronz-bg">
            <ul>
              <li>Pelan Tindakan Bandar Pintar</li>
              <li>Jawatankuasa Bandar Pintar</li>
              <li>Initial Dashboard / Mini Command Center</li>
              <li>Pematuhan kepada 10 indikator MS ISO 37122:2019</li>
            </ul>
          </div>
        </div>
        <div
          className="card silver-border"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className="first">
            <p>Developing Smart City</p>
            <p>
              <b>SILVER</b>
            </p>
            <img src={silver} />
          </div>
          <div className="second silver-bg">
            <ul>
              <li>
                Melaksanakan inisiatif melalui Pelan Tindakan Bandar Pintar
              </li>
              <li>Jawatankuasa Bandar Pintar Unit</li>
              <li>Bahagian / Unit Bandar Pintar</li>
              <li>Integrated Command Center</li>
              <li>Pematuhan kepada 34 indikator MS ISO 37122:2019</li>
            </ul>
          </div>
        </div>
        <div
          className="card gold-border"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className="first">
            <p>Leading Smart City</p>
            <p>
              <b>GOLD</b>
            </p>
            <img src={gold} />
          </div>
          <div className="second gold-bg">
            <ul>
              <li>
                Melaksanakan sebahagian besar inisiatif melalui Pelan Tindakan
                Bandar Pintar
              </li>
              <li>Jawatankuasa Bandar Pintar</li>
              <li>Bahagian / Unit Bandar Pintar</li>
              <li>Advanced Command Center</li>
              <li>Pematuhan kepada 62 indikator MS ISO 37122:2019</li>
            </ul>
          </div>
        </div>
        <div
          className="card platinium-border"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className="first">
            <p>Visionary Smart City</p>
            <p>
              <b>PLATINUM</b>
            </p>
            <img src={platinium} />
          </div>
          <div className="second platinium-bg">
            <ul>
              <li className="platinium-x">
                Melaksanakan keseluruhan inisiatif Pelan Tindakan Bandar Pintar
              </li>
              <li className="platinium-x">Jawatankuasa Bandar Pintar</li>
              <li className="platinium-x">Bahagian / Unit Bandar Pintar</li>
              <li className="platinium-x">SME Bandar Pintar</li>
              <li className="platinium-x">
                Advanced Command Center with Machine Modelling
              </li>
              <li className="platinium-x">
                Pematuhan kepada 85 indikator MS ISO 37122:2019
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="heading-main">
        Sudahkan PBT anda sudah memperolehi Penarafan Bandar Pintar ?
      </h3>
      <p className="bottom-heading">Jika belum, klik disini untuk memohon.</p>
    </div>
  );
}

export default KategoryPenarafan;
