import { Row, Col } from "antd";
import React, { useEffect } from "react";
import "./pengesahanpemant.scss";
import AOS from "aos";
import PengesahanPemantTable from "../../../../components/Tables/PengesahanPemantTable";
function PengesahanPemanta() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="pengesahan-pemant"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="main-h">
        <h3>PENGESAHAN PEMANT</h3>
      </div>
      <div className="table-data">
        <h3>MAKLUMAT PELAKSANA</h3>
        <p>Sila sahkan maklumat pemantauan di bawah</p>
        <Row justify="start" className="mt-5">
          <Col span={8}>
            <p className="p">Agensi Pemantau</p>
            <input type="text" className="input" value="PlanMalaysia" />
          </Col>
          <Col span={8}>
            <p className="p">Nama Pegawai</p>
            <input type="text" className="input" value="Mahmud bin Abdullah" />
          </Col>
        </Row>
        <Row justify="start" className="mt-5">
          <Col span={8}>
            <p className="p">Emel</p>
            <input
              type="text"
              className="input"
              value="mahud@planmalaysia.com.my"
            />
          </Col>
          <Col span={8}>
            <p className="p">Nombor Telefon</p>
            <input type="text" className="input" value="030000000000" />
          </Col>
        </Row>
        <div className="new-details">
          <p className="">
            <b>MAKLUMAT PEMANTAUAN</b>
          </p>
          <Row justify="start" className="  ">
            <Col span={8}>
              <p className="p">Jangka Masa</p>
              <input type="text" className="input" value="Jangka Masa Pendek" />
            </Col>
            <Col span={8}>
              <p className="p">Prinsip</p>
              <input
                type="text"
                className="input"
                value="Prinsip 1: Tadbir Urus Bandar Yang Baik"
              />
            </Col>
          </Row>
        </div>
        <PengesahanPemantTable />
        <div className="btns-info">
          <p className="btn">Kembali</p>
          <p className="btn blue">Simpan</p>
        </div>
      </div>
    </div>
  );
}

export default PengesahanPemanta;
