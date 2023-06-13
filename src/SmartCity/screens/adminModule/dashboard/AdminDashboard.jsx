import React, { useState, useEffect } from "react";
import "./admindashboard.scss";
import AOS from "aos";
import { HiOutlineUserCircle, HiOutlineCheckCircle } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import Calendar from "react-calendar";
import { TbOvalVerticalFilled } from "react-icons/tb";
import Chart from "react-apexcharts";
import AdminDashboardTable from "components/smartCity/Tables/AdminDashboardTable";
import KemaskiniKelandarModal from "components/smartCity/modals/kemaskiniKelandar/KemaskiniKelandarModal";
function AdminDashboard() {
  const [value, onChange] = useState(new Date());
  const [kemShow, setKemShow] = useState(false);
  const options = {
    labels: ["Belum Semak", "Telah Disahkan"],
    colors: ["#DE1213", "#92EB91"],
  };
  const series = [55, 45];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="admin-dashboard"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {kemShow ? (
        <KemaskiniKelandarModal show={kemShow} setShow={setKemShow} />
      ) : null}
      <p>
        <b>DASHBOARD STATUS KEMASKINI</b>
      </p>
      <div className="boxes">
        <div className="left">
          <div className="boxes-inner">
            <div className="box">
              <div className="lft bg-yel">
                <h2>8</h2>
                <p className="head">Jumlah Agensi</p>
              </div>
              <div className="rght  bg-yel-lt">
                <HiOutlineUserCircle className="box-icon" />
              </div>
            </div>
            <div className="box">
              <div className="lft bg-red-lt">
                <h2>20</h2>
                <p className="head">Semak Baru</p>
              </div>
              <div className="rght bg-red-lts">
                <FiEdit className="box-icon" onClick={() => setKemShow(true)} />
              </div>
            </div>
            <div className="box">
              <div className="lft bg-gr-lt">
                <h2>30</h2>
                <p className="head">Telah Disahkar</p>
              </div>
              <div className="rght bg-gr-lts">
                <HiOutlineCheckCircle className="box-icon" />
              </div>
            </div>
          </div>
          <div className="chart-inner">
            <b>
              <h3>PERATUSAN KEMASKINI PEMANTAUAN</h3>
            </b>
            <div className="chart-box">
              <Chart
                series={series}
                type="donut"
                width="430"
                options={options}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <Calendar onChange={onChange} value={value} />
          <div className="desc">
            <p className="heading">
              <TbOvalVerticalFilled className="icons bg1" />
              <span>Jangka Masa Pendek</span>
            </p>
            <p className="heading">
              <TbOvalVerticalFilled className="icons bg2" />
              <span>Jangka Masa Sederhana</span>
            </p>
            <p className="heading">
              <TbOvalVerticalFilled className="icons bg3" />
              <span>Jangka Masa Panjang</span>
            </p>
          </div>
        </div>
      </div>
      <div className="table-data">
        <p>Senarai Semak Baru</p>
        <AdminDashboardTable />
      </div>
    </div>
  );
}

export default AdminDashboard;
