import AOS from "aos";
import React, { useEffect } from "react";
import KemaskiniTable from "components/smartCity/Tables/KemaskiniTable";
import "./kemaskini.scss";
function KemaskiniPemantauan() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="kemaskini-pemantauan"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h3>PENGURUSAN DASAR PERBANDARAN DPN2</h3>
      <div className="table-data">
        <h4>Senarai Makhlumat DPN2</h4>
        <p>xxxxxxxx</p>
        <br />
        <KemaskiniTable />
      </div>
    </div>
  );
}

export default KemaskiniPemantauan;
