import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Background from "../../assets/images/Background.png";

const HeaderContent = ({ title, titleBreadcrumb, subtitle }) => {
  return (
    <div className="card" style={{ height: "70vh", zIndex: "-1" }}>
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
        <img src={Background} alt="direct-img" height={350} />
      </div>
      <div style={{ marginTop: "-210px", zIndex: "-2" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#eff3f9"
            fillOpacity="1"
            d="M0,160L34.3,138.7C68.6,117,137,75,206,64C274.3,53,343,75,411,112C480,149,549,203,617,202.7C685.7,203,754,149,823,149.3C891.4,149,960,203,1029,234.7C1097.1,267,1166,277,1234,256C1302.9,235,1371,181,1406,154.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeaderContent;
