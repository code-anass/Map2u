import React from "react";
import Navbar from "../navbar/Navbar";
import "./profilenscp.scss";
import img1 from "../../assets/profilenscp/img1.png";
import img2 from "../../assets/profilenscp/img2.png";
import img3 from "../../assets/profilenscp/img3.png";
import img4 from "../../assets/profilenscp/img4.png";
function ProfileNSCP() {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <div className="profilenscp">
          <h1 className="main-h1">Smart City Profile</h1>
          <p className="main-p">List Module Smart City Profile</p>
          <div className="main-container">
            <div className="item">
              <img src={img1} className="img1" />
              <div className="text">
                <h3>Smart City Profile by State</h3>
              </div>
            </div>
            <div className="item">
              <img src={img2} className="img1" />
              <div className="text">
                <h3>Smart City Profile by PBT</h3>
              </div>
            </div>
            <div className="item">
              <img src={img3} className="img1" />
              <div className="text">
                <h3>Smart City Action Plan</h3>
              </div>
            </div>
            <div className="item">
              <img src={img4} className="img1" />
              <div className="text">
                <h3>Smart City Command Centre</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileNSCP;
