import React, { useState, useEffect } from "react";
import "./smartcitydetails.scss";
import pengurusan from "../../../../../assets/repositoryPenarafan/pengurusan.png";
import { Button } from "antd";
import AOS from "aos";
function SmartCityDetails() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="smartcitydetails"
      data-aos="fade-upd"
      data-aos-duration="2000"
    >
      <div className="top">
        <div>
          <h3>CITY SERVICES ACCESSIBLE THAT CAN BE REQUESTED ONLINE</h3>
          <div style={{ marginTop: "20px" }}>
            <Button type="primary">Kemaskini</Button>
            <Button type="primary" danger style={{ marginLeft: "10px" }}>
              Buang
            </Button>
          </div>
        </div>
        <div className="img">
          <img src={pengurusan} alt="" />
        </div>
      </div>
      <div className="form-data">
        <div className="left">
          <table>
            <tr>
              <th>Komponen</th>
              <td>Smart Government</td>
            </tr>
            <tr>
              <th>Indikator Bandar</th>
              <td>Governance</td>
            </tr>
            <tr>
              <th>Indikator </th>
              <td>City services accessible that can be requested online</td>
            </tr>
            <tr>
              <th>ISO </th>
              <td>MS ISO 37122:2019</td>
            </tr>
            <tr>
              <th>Numerator </th>
              <td>
                Total number of city services offered to people and businesses
                through a centralised Internet interface
              </td>
            </tr>
            <tr>
              <th>Denominator</th>
              <td>Total number of city services offered by the city</td>
            </tr>
            <tr>
              <th>Formula</th>
              <td>(x/y)*100</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>
                <button>Aktif</button>
              </td>
            </tr>
            <tr>
              <th>Catatan</th>
              <td>
                Jumlah perkhidmatan PBT yang disediakan secara dalam talian
                (Faktor X) <br />
                Jumlah keseluruhan perkhidmatan yang disediakan oleh PBT (Faktor
                Y)
                <br /> FORMULA MARKAH: ( Faktor X / Faktor Y ) X 100 = Z %
              </td>
            </tr>
          </table>
        </div>
        <div className="right">
          <h3>SKOR INDIKATOR</h3>
          <hr />

          <table>
            <tr>
              <th style={{ width: "20px" }}>#</th>
              <th>Skor</th>
              <th style={{ width: "30px" }}>Markah</th>
            </tr>
            <tr>
              <td>1</td>
              <td> Menyediakan perkhidmatan atas talian sepenuhnya </td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Menyediakan sebahagian perkhidmatan atas talian </td>
              <td>1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tidak menyediakan perkhidmatan atas talian </td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Tiada Maklumat </td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SmartCityDetails;
