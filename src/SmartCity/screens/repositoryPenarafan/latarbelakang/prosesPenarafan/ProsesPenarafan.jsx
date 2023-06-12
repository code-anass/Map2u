import React, { useState, useEffect } from "react";
import "./prosespenarafan.scss";
import { RiFileList3Line } from "react-icons/ri";
import { HiOutlineBuildingOffice2, HiOutlineWifi } from "react-icons/hi2";
import iso from "../../../../assets/repositoryPenarafan/process/iso.png";
import smartcity from "../../../../assets/repositoryPenarafan/process/smartcity.png";
import AOS from "aos";
import thumbnail_smartcity from "../../../../assets/repositoryPenarafan/process/thumbnail_smartcity.png";
import ProsesModal from "./ProsesModel/ProsesModel";
function ProsesPenarafan() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="prosespenarafan"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      {show ? <ProsesModal show={show} setShow={setShow} /> : null}
      <div className="top-h">
        <h2>PROSES PENARAFAN</h2>
        <h3>PENARAFAN BANDAR PINTAR NEGARA</h3>
      </div>
      <div className="container">
        <div className="step1">
          <RiFileList3Line className="icon" />
          <p>
            <b>2019</b>
          </p>
          <p className="green">
            Rangka Kerja Bandar Pintar Malaysia 2019 - 2025 (RKPBM)
          </p>
          <div className="p">
            - Penilaian Bandar Pintar berdasarkan ISO 37122
          </div>
        </div>
        <div className="step2">
          <HiOutlineBuildingOffice2 className="icon" />
          <p>
            <b>2020</b>
          </p>
          <p className="green">Libat Urus Awal dan Mobilisasi</p>
          <div className="p">
            - Perbincangan Awal antara PLANMalaysia dan Jabatan Standard
            Malaysia (JSM)
          </div>
        </div>
        <div className="step3">
          <p>
            <b>2021</b>
          </p>
          <p className="green">Pembangunan Dokumen MS ISO37122:2019</p>
          <div className="p">
            - Panduan kepada Kementerian, Agensi dan PBT dalam merancang dan
            membangunkan bandar pintar berdasarkan standard global.
            <br />- Dokumen diluluskan oleh Menteri Kanan MITI pada 9 Disember
            2021.
          </div>
        </div>
        <div className="step4">
          <p>
            <b>2022</b>
          </p>
          <p className="green">
            Pembangunan Malaysia National Annex to MS ISO 37122:2019
          </p>
          <div className="p">
            - Menyesuaikan penggunaan indikator dalam konteks Malaysia.
            <br />- Dokumen ini telah siap disediakan dan akan diluluskan oleh
            Menteri MITI yang dijangkan pada bulan Mei 2023.
          </div>
        </div>
        <div className="step5">
          <HiOutlineWifi className="icon" />
          <p>
            <b>2023</b>
          </p>
          <p className="green">
            Rangka Kerja Bandar Pintar Malaysia 2019 - 2025 (RKPBM)
          </p>
          <div className="p">
            Penilaian Bandar Pintar berdasarkan empat (4) fasa pelaksanaan
            merangkumi: i.Smart CityEarly Adopter ii.Developing Smart City
            iii.Leading Smart City iv.Visionary Smart City
          </div>
        </div>
        <div className="step6">
          <img src={smartcity} alt="" />
        </div>
        <div className="iso">
          <img src={iso} alt="" onClick={() => setShow(true)} />
        </div>
      </div>
    </div>
  );
}

export default ProsesPenarafan;
