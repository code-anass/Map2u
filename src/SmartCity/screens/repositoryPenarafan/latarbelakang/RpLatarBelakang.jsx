import React, { useEffect } from "react";
import "./rplatarbelakang.scss";
import AOS from "aos";
import about from "assets/latarBelakang/about.png";
function RpLatarBelakang() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="rplatarbelakang"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div className="content-rplatar">
        <h2 className="main-h">LATAR BELAKANG</h2>
        <h3 className="main-h2">PENARAFAN BANDAR PINTAR NEGARA</h3>
        <img src={about} alt="" className="ltr-img" />
        <div className="desc">
          <p>
            Penarafan Bandar Pintar Negara adalah{" "}
            <b>
              rangka kerja peringkat kebangsaan yang menjadi panduan dan rujukan
            </b>{" "}
            kepada Pihak Berkuasa Tempatan sebagai pengurus bandar, kerajaan
            negeri, kementerian dan jabatan persekutuan, pemain industri, ahli
            akademik dan pihak berkepentingan lain dalam merancang dan
            membangunkan bandar pintar di Malaysia secara holistik dan selaras
            dengan perkembangan semasa.
          </p>
          <p>
            Dokumen tersebut merangkumi definisi bandar pintar dalam konteks
            Malaysia,{" "}
            <b>
              7 komponen utama bandar pintar, hala tuju dasar dan menggariskan
              cadangan strategi dan inisiatif bagi setiap komponen
            </b>{" "}
            yang boleh menjadi rujukan kepada mereka yang berminat untuk
            melaksanakan inisiatif bandar pintar di Malaysia.
          </p>
          <p>
            Dalam konteks Malaysia, bandar pintar ditakrifkan sebagai{" "}
            <b>
              'bandar yang menggunakan ICT dan kemajuan teknologi dan inovasi
            </b>{" "}
            untuk menangani isu-isu bandar termasuk untuk meningkatkan kualiti
            hidup, menggalakkan pertumbuhan ekonomi, membangunkan persekitaran
            yang mampan dan selamat dan menggalakkan amalan pengurusan bandar
            yang cekap. Bandar pintar Malaysia bermatlamat untuk menangani isu
            dan cabaran bandar ke arah mencapai tiga tonggak utama ekonomi
            berdaya saing, persekitaran mampan dan kualiti hidup yang lebih
            baik.
          </p>
          <h4>
            <b>7 komponen utama bandar pintar Malaysia ialah:</b>
          </h4>
          <br />
          <h4>1. Smart Economy</h4>
          <h4>2. Smart Living</h4>
          <h4>3. Smart Environment</h4>
          <h4>4. Smart People</h4>
          <h4>5. Smart Governance</h4>
          <h4>6. Smart Mobility</h4>
          <h4>7. Smart Digital Infrastructure</h4>
        </div>
      </div>
    </div>
  );
}

export default RpLatarBelakang;
