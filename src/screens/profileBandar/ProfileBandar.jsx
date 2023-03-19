import React from "react";
import "./profileBandar.scss";
import img1 from "../../assets/profileBindar/img1.png";
import img2 from "../../assets/profileBindar/img2.png";
import img3 from "../../assets/profileBindar/img3.png";
import img4 from "../../assets/profileBindar/img4.png";
function ProfileBandar() {
  return (
    <div className="profileBandar">
      <h2 className="main-heading">PROFIL BANDAR PINTAR NEGARA</h2>
      <div className="profiles">
        <div className="card">
          <img src={img1} alt="" />
          <p>PROFIL BANDAR PINTAR NEGERI</p>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <p>PROFIL BANDAR PINTAR NEGERI</p>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <p>PROFIL BANDAR PINTAR NEGERI</p>
        </div>
        <div className="card">
          <img src={img4} alt="" />
          <p>PROFIL BANDAR PINTAR NEGERI</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileBandar;
