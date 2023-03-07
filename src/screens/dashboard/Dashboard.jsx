import React from "react";
import Chart from "react-apexcharts";

import "./dashboard.scss";
import leftLogo from "../../assets/dashboard/leftLogo.png";
import { FaRegListAlt, FaRegCheckSquare } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
function Dashboard() {
  const options = {
    labels: [
      "21  STRATEGI TELAH DILAKSANAKAN",
      "17 STRATEGI DALAM PELAKSANAAN ",
    ],
  };
  const series = [21, 17];
  return (
    <div className="dashboard">
      <div className="container">
        <p className="p-heading">Rancangan Fizikal Negara Keempat (RFN4)</p>
        <div className="child-container">
          <div className="left-side">
            <img src={leftLogo} />
            <p>
              Rancangan Fizikal Negara Keempat (RFN4) memberi penekanan khusus
              dalam menentukan corak perancangan fizikal negara melalui
              pembentukan strategi dan tindakan khusus meliputi corak
              pembangunan guna tanah, pertumbuhan ekonomi, pengekalan dan
              pengurusan sumber, penyepaduan dan penambahbaikan rangkaian
              pengangkutan dan infrastruktur negara dan penaiktarafan kualiti
              hidup dan kesejahteraan negara.
            </p>
          </div>
          <div className="right-side">
            <div className="row-d">
              <div className="col1">
                <div className="desc">
                  <p>
                    <b>3</b>
                  </p>
                  <p>TERAS</p>
                </div>
                <p>
                  <FaRegListAlt className="icon" />
                </p>
              </div>
              <div className="col1">
                <div className="desc">
                  <p>
                    <b>39</b>
                  </p>
                  <p>STRATEGI</p>
                </div>
                <p>
                  <FiEdit className="icon" />
                </p>
              </div>
            </div>
            <div className="row-d">
              <div className="col1">
                <div className="desc">
                  <p>
                    <b>11</b>
                  </p>
                  <p>HALATUJU STRATEGIK</p>
                </div>
                <p>
                  <IoDocumentTextOutline className="icon" />
                </p>
              </div>
              <div className="col1">
                <div className="desc">
                  <p>
                    <b>120</b>
                  </p>
                  <p>TINDAKAN</p>
                </div>
                <p>
                  <FaRegCheckSquare className="icon" />
                </p>
              </div>
            </div>
            <div className="chart-container">
              <Chart options={options} series={series} type="pie" width="580" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
