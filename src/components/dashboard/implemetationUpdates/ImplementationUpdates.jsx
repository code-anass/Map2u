import React from "react";
import { Select, Row, Col, Checkbox, Switch } from "antd";
import { FaRegListAlt, FaRegCheckSquare } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import Chart from "react-apexcharts";

import { FiEdit } from "react-icons/fi";
import "./implementation.scss";
const { Option } = Select;
function ImplementationUpdates() {
  const category = ["Teras 1 :"];
  const options = {
    labels: [
      "3 BELUM DILAKSANAKAN",
      "5 DALAM PELAKSANAAN",
      "9 TELAH DILAKSANA ",
    ],
  };
  const series = [3, 5, 9];
  return (
    <div className="custom-implementation">
      <h4>DASHBOARD PEMANTAUAN STATUS PERLAKSANAAN RFN</h4>
      <div className="main-filters">
        <div className="box">
          <p>Kategori :</p>
          <Select
            // onChange={handleChange}
            style={{
              width: 200,
            }}
            placeholder="Select"
          >
            {category?.map((v) => {
              return <Option value={v}>{v}</Option>;
            })}
          </Select>
        </div>
        <div className="box">
          <p>Kategori Pemantauan :</p>
          <Select
            // onChange={handleChange}
            style={{
              width: 200,
            }}
            placeholder="Select"
          >
            {category?.map((v) => {
              return <Option value={v}>{v}</Option>;
            })}
          </Select>
        </div>
      </div>
      <div className="main-statics">
        <div className="box">
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
                <b>39</b>
              </p>
              <p>STRATEGI</p>
            </div>
            <p>
              <FiEdit className="icon" />
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
        <div className="graph">
          <Chart options={options} series={series} type="donut" width="400" />
        </div>
      </div>
    </div>
  );
}

export default ImplementationUpdates;
