import React from "react";
import "./pengurusan.scss";
import pengurusan from "../../../assets/repositoryPenarafan/pengurusan.png";
import PengurusanTable from "../../../components/Tables/PengurusanTable";
import { useNavigate } from "react-router-dom";
function PengurusanPenarafan() {
  const navigate = useNavigate();
  return (
    <div className="pengurusan">
      <div className="top">
        <div>
          <h3>INDIKATOR BAN DAR PINTAR</h3>
          <button onClick={() => navigate("/smartcity/new")}>
            Tambah Indikator Bandar Pintar
          </button>
        </div>
        <div className="img">
          <img src={pengurusan} alt="" />
        </div>
      </div>
      <PengurusanTable bordered={true} />
    </div>
  );
}

export default PengurusanPenarafan;
