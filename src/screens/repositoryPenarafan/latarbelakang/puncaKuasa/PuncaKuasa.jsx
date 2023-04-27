import React, { useEffect } from "react";
import "./puncakuasa.scss";
import book from "../../../../assets/repositoryPenarafan/latar/book.png";
import phase1 from "../../../../assets/repositoryPenarafan/latar/phase1.png";
import phase2 from "../../../../assets/repositoryPenarafan/latar/phase2.png";
import phase3 from "../../../../assets/repositoryPenarafan/latar/phase3.png";
import AOS from "aos";
function PuncaKuasa() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="puncakuasa" data-aos="fade-down" data-aos-duration="2000">
      <div className="top-h">
        <h2>PUNCA KUASA</h2>
        <h3>RANGKA KERJA BANDAR PINTAR MALAYSIA 2019 - 2025</h3>
      </div>
      <div className="card">
        <div className="left">
          <img src={book} alt="" />
        </div>
        <div className="right">
          <p className="bold">POLISI 6</p>
          <p className="">
            “Akreditasi piawaian bandar pintar akan diperkenalkan bagi
            menetapkan standard bandar pintar untuk pengiktirafan.”
          </p>
          <p className="bold">PELAN TINDAKAN 6</p>
          <p>
            Menubuhkan Akreditasi Bandar Pintar Malaysia berdasarkan ISO 37122
          </p>
          <div className="hr"></div>

          <div>
            <b>PLANMalaysia</b> dan <b>Jabatan Standard Malaysia (JSM)</b>
          </div>
        </div>
      </div>
      <br />
      <h3>IMPLEMENTATION ROADMAP</h3>
      <div className="card2">
        <div className="left">
          <img src={phase1} alt="" />
        </div>
        <div className="right">
          <p className="bold">
            Establish Malaysia Accreditation on Smart City based on ISO 37122
          </p>
          <p>- Department of Standards Malaysia</p>
          <p>- PLANMalaysia</p>
        </div>
      </div>
      <div className="card2">
        <div className="left">
          <img src={phase2} alt="" />
        </div>
        <div className="right">
          <p className="bold">
            Capacity building exercise with local authorities to enhance
            technological and infrastructure readiness to support smart city
            development
          </p>
          <p>- Smart City Council</p>
          <p>- PLANMalaysia</p>
          <p className="bold">
            Update the Smart City Dashboard accordingly with newly identified
            pilot areas as well as strategies and initiatives that have been
            implemented
          </p>
          <p>- KPKT</p>
          <p>- PLANMalaysia</p>
        </div>
      </div>
      <div className="card2">
        <div className="left">
          <img src={phase3} alt="" />
        </div>
        <div className="right">
          <p className="bold">
            Identify relevant indicators and threshold for project monitoring
            process
          </p>
          <p>- Department of Standards Malaysia</p>
          <p>- PLANMalaysia</p>
          <p className="bold">
            Accreditation of smart city based on application by local authority
            or private developer
          </p>
          <p>- Department of Standards Malaysia</p>
        </div>
      </div>
    </div>
  );
}

export default PuncaKuasa;
