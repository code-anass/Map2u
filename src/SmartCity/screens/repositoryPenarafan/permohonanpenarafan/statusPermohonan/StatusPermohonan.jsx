import React, { useEffect } from "react";
import "./statuspermohonan.scss";
import AOS from "aos";
import permohonan from "assets/repositoryPenarafan/permohan/permohonan.png";

import { useNavigate } from "react-router-dom";
import StatusPermohonanTable from "../../../../components/Tables/StatusPermohonanTable";
function StatusPermohonan() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="status-permohonan"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <img src={permohonan} alt="" />
      <h3>STATUS PERMOHONAN PENARAFAN BANDAR PINTAR</h3>
      <div className="permohonan-table">
        <StatusPermohonanTable bordered={true} />
      </div>
    </div>
  );
}

export default StatusPermohonan;
