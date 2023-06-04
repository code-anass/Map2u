import React, { useState, useEffect } from "react";
import "./pengesahan.scss";
import { VscListFlat } from "react-icons/vsc";
import { Select } from "antd";
import PengesahanTable from "../../../components/Tables/PengesahanTable";
import AOS from "aos";
function Pengesahan() {
  const agensi = [
    { value: "agensi", label: "Agensi Persekutuan" },
    { value: "agensi", label: "Agensi Negeri" },
    { value: "agensi", label: "Agensi Daerah" },
    { value: "agensi", label: "Pihak Berkuasa Tempatan" },
  ];
  const pilih = [
    { value: "agensi", label: "Negeri Sembilan" },
    { value: "agensi", label: "Kedah" },
    { value: "agensi", label: "Perlis" },
    { value: "agensi", label: "Pahang" },
  ];
  const nama = [
    { value: "agensi", label: "PLANMalaysia Negeri Sembilan" },
    { value: "agensi", label: "JKR Negeri Sembilan" },
    { value: "agensi", label: "Kementerian Pembangunan Kajian Tempatan" },
    { value: "agensi", label: "Unit Penyelarasan Pelaksanaan ICU, JPM" },
  ];
  const [isBelum, setIsBelum] = useState(true);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="pengesahan" data-aos="fade-down" data-aos-duration="1000">
      <h3 className="main-h">PENGESAHAN PEMANTAUAN</h3>
      <div className="top-row">
        <p
          className={`p-h ${isBelum ? `belum` : "not-belum"}`}
          onClick={() => setIsBelum(true)}
        >
          <VscListFlat className="icon" />
          <span>Belum Disahkan</span>
        </p>
        <p
          className={`p-h ${!isBelum ? `belum` : "not-belum"}`}
          onClick={() => setIsBelum(false)}
        >
          <VscListFlat className="icon" />
          <span>Telah Disahkan</span>
        </p>
      </div>
      <div className="table-data">
        <h4>SENARAI AGENSI PEMANTAUAN BELUM DISAHKAN</h4>
        <p className="desc">
          Pilih agensi di bawah untuk membuat tetapan pemantauan
        </p>
        <div className="filter-row">
          <div className="my-div">
            <p className="desc">Agensi Pelaksana</p>
            <Select
              showSearch
              placeholder="Select"
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
          <div className="my-div">
            <p className="desc">Pilih Negeri</p>
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={nama}
            />
          </div>
          <div className="my-div">
            <p className="desc">Nama Agensi</p>
            <Select
              showSearch
              placeholder="Select"
              optionFilterProp="children"
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={pilih}
            />
          </div>
        </div>
        <PengesahanTable isBelum={isBelum} />
      </div>
    </div>
  );
}

export default Pengesahan;
