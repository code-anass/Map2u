import React, { useEffect } from "react";
import KemaskiniFormulaTable from "../../../../components/Tables/KemaskiniFormulaTable";
import "./kemaskiniformula.scss";
import AOS from "aos";
function KemiskiniFormula() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="kemaskini-formula"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h3>KEMASKINI MAKLUMAT PEMANTAUAN DPN 2</h3>
      <div className="table-data">
        <h4>Kemaskini Formula </h4>
        <p>Pilih Kemaskini formula pemantauan di bawah mengikut jangka masa</p>
        <br />
        <KemaskiniFormulaTable />
      </div>
    </div>
  );
}

export default KemiskiniFormula;
