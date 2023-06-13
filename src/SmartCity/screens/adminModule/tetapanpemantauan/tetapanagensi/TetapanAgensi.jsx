import AOS from "aos";
import React, { useEffect } from "react";
import KemaskiniFormulaTable from "components/smartCity/Tables/KemaskiniFormulaTable";
import "./tetapanagensi.scss";
function TetapanAgensi() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="tetapan-agensi"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h3>Tetapan Agensi</h3>
      <div className="table-data">
        <h4>Kategori Jangka Masa </h4>
        <p>
          Pilih kategori jangka masa untuk menghantar pemantauan ke PBT atau
          agensi berkaitan
        </p>
        <br />
        <KemaskiniFormulaTable />
      </div>
      <div className="ta-btn-row">
        <p className="btn">Sebelumnya</p>
        <p className="btn btn-c">Seterusnya</p>
      </div>
    </div>
  );
}

export default TetapanAgensi;
