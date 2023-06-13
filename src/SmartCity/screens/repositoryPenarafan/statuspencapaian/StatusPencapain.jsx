import React, { useState, useEffect } from "react";
import "./statuspencapaian.scss";
import AOS from "aos";
import SimpleMap from "components/smartCity/map/simpleMap/SimpleMap";
import MapContainer from "components/smartCity/map/currentlocation/CurrentLocation";
import gold from "assets/repositoryPenarafan/gold.png";
import bronz from "assets/repositoryPenarafan/bronz.png";
import platinium from "assets/repositoryPenarafan/platinium.png";
import silver from "assets/repositoryPenarafan/silver.png";
function StatusPencapain() {
  const [currentPosition, setCurrentPosition] = useState({});
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="status-pencapaian"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <h2 className="heading">STATUS PENCAPAIAN BANDAR PINTAR</h2>
      <div className="main-div">
        <div className="left">
          <div className="head blue">
            <p>PBT telah memohon penarafan Bandar Pintar</p>
            <h1>4/155</h1>
          </div>
          <div className="head cyan">
            <p>PBT telah menerIma penarafan Bandar Pintar</p>
            <h1>0/155</h1>
          </div>

          <div className="boxes">
            <div className="box">
              <div className="left">
                <img src={platinium} alt="" />
              </div>
              <div className="right-x">
                <p>
                  <b>0</b>
                </p>
                <p>Visionary</p>
                <p>Smart City</p>
                <p>
                  <b>Platinium</b>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="left">
                <img src={gold} alt="" />
              </div>
              <div className="right-x">
                <p>
                  <b>0</b>
                </p>
                <p>Leading Smart</p>
                <p>City</p>
                <p>
                  <b>Gold</b>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="left">
                <img src={silver} alt="" />
              </div>
              <div className="right-x">
                <p>
                  <b>0</b>
                </p>
                <p>Developing</p>
                <p>Smart City</p>
                <p>
                  <b>Silver</b>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="left">
                <img src={bronz} alt="" />
              </div>
              <div className="right-x">
                <p>
                  <b>0</b>
                </p>
                <p>Smart City</p>
                <p>Early Adopter</p>
                <p>
                  <b>Bronz</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          {/* <MapContainer
            currentPosition={currentPosition}
            setCurrentPosition={setCurrentPosition}
          /> */}
          <SimpleMap />
        </div>
      </div>
      <p>Sudahkan PBT anda sudah memperolehi Penarafan Bandar Pintar ?</p>
      <p>
        Jika belum, klik <a href="#">disini</a> untuk memohon.
      </p>
    </div>
  );
}

export default StatusPencapain;
