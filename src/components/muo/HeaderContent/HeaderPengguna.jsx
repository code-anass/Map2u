import React from "react";
import Breadcrumb from "components/muo/Breadcrumb/Breadcrumb";
import profile from "assets/images/profile.png";
import WaveSvg from "assets/images/bg-waves.svg";

const HeaderPengguna = ({ title, titleBreadcrumb, subtitle }) => {
  return (
    <div className="card" style={{ height: "70vh", width: "98%", backgroundImage: `url(${WaveSvg})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom" }}>
      <Breadcrumb title={titleBreadcrumb} />
      <div
        className="d-flex align-items-center justify-content-between p-4"
        style={{ height: "100%" }}
      >
        <div>
          <h1 style={{ color: "#0061f2", textTransform: "uppercase" }}>
            {title}
          </h1>
          <p>{subtitle}</p>
        </div>
        <img src={profile} alt="direct-img" height={350} />
      </div>
    </div>
  );
};

export default HeaderPengguna;
