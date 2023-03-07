import React, { useState } from "react";
import "./monitoring.scss";
import { FaRegEdit } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { Select, Row, Col, Checkbox, Switch } from "antd";
import Common from "./Common";
import ImplementationUpdates from "../implemetationUpdates/ImplementationUpdates";
const { Option } = Select;
const category = ["Teras 1 : Petumbuhan Dinamik Dan Seimbang"];
function MonitoringUpdates() {
  const [clickedBtn, setClickedBtn] = useState(0);
  let btns = ["TINDAKAN RFN 4", "INISIATIF UTAMA RFN", "STATUS PELAKSANAAN"];
  let tableData = [
    {
      heading:
        "PD 1 : Pengukuhan Kedudukan Strategik Negara di Peringkat Global",
      data: [
        {
          id: 1,
          title:
            "Kajian Garis panduan keselamatann infrastruktur strategik negara",
          isInPlanning: false,
          isInImplementation: false,
          isImplemented: false,
        },
      ],
    },
    {
      heading: "PD 2 : Pertumbuhan Ekonomi Mampan dan Berdaya Saing ",
      data: [
        {
          id: 2,
          title:
            "Penubuhan JPW dan penyedian Rancangan Wilayah (RW) bagi:   1. Konurbasi Nasional 2. Konurbasi Utara",
          isInPlanning: false,
          isInImplementation: false,
          isImplemented: false,
        },
        {
          id: 3,
          title:
            "Penyediaan pelan induk bandar raya saing bagi bandar-bandar utama",
          isInPlanning: false,
          isInImplementation: false,
          isImplemented: false,
        },
      ],
    },
    {
      heading:
        "PD 3 : Rangkaian Hubungan Pengangkutan Strategik dan Bersepadu   ",
      data: [
        {
          id: 2,
          title:
            "Pembinaan Lebuh Raya Pantai TImur 3 (LPT3) Terengganu - Kelantan",
          isInPlanning: false,
          isInImplementation: false,
          isImplemented: false,
        },
      ],
    },
  ];
  return (
    <div className="monitoring-updates">
      <div className="container">
        {/* <p className="p-heading">Rancangan Fizikal Negara Keempat (RFN4)</p> */}
        <div className="child-container">
          <div className="left-side">
            <div className="box">
              <div className="icon-box">
                <FaRegEdit className="icon" />
              </div>
              <p>PELAKSANAAN RFN</p>
            </div>
            <div className="box">
              <div className="icon-box grey">
                <BsGraphUp className="icon" />
              </div>
              <p>TREN DAN TAHAP PENCAPIAIAN RFN</p>
            </div>
          </div>
          <div className="right-side">
            <div className="btns-row">
              {btns.map((val, index) => (
                <button
                  className={index == clickedBtn ? "active" : ""}
                  onClick={() => {
                    setClickedBtn(index);
                  }}
                >
                  {val}
                </button>
              ))}
            </div>
            {clickedBtn == 0 ? (
              <Common category={category} tableData={tableData} />
            ) : clickedBtn == 1 ? (
              <Common category={category} tableData={tableData} />
            ) : (
              <ImplementationUpdates />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitoringUpdates;
