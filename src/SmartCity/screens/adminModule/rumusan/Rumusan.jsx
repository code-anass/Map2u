import { Select } from "antd";
import AOS from "aos";
import React, { useEffect } from "react";
import RumusanTable from "../../../components/Tables/RumusanTable";
import "./rumusan.scss";
function Rumusan() {
  const agensi = [
    { value: "agensi", label: "Agensi Persekutuan" },
    { value: "agensi", label: "Agensi Negeri" },
    { value: "agensi", label: "Agensi Daerah" },
    { value: "agensi", label: "Pihak Berkuasa Tempatan" },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="rumusan" data-aos="fade-down" data-aos-duration="1000">
      <b>
        <h3>RUMUSAN MAKLUMAT PENILAIAN DAN PEMANTAUAN PELAKSANAN</h3>
      </b>
      <div className="table-data">
        <p>
          <b>MAKLUMAT PEMANTAUAN</b>
        </p>
        <div className="filter-details">
          <div className="left">
            <p>Jangka Masa</p>
            <Select
              showSearch
              placeholder="Pilih Jangka Masa"
              optionFilterProp="children"
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={agensi}
            />
            <p className="below">Prinsip</p>
            <Select
              showSearch
              placeholder="Pilih Prinsip"
              optionFilterProp="children"
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={agensi}
            />
          </div>
          <div className="right">
            <h3>113</h3>
            <span>Tindakan</span>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <RumusanTable />
        </div>
        <div className="btns-info">
          <p className="btn">Kembali</p>
          <p className="btn blue">Simpan</p>
        </div>
      </div>
    </div>
  );
}

export default Rumusan;
