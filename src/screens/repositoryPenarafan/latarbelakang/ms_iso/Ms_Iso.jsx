import React, { useEffect } from "react";
import "./msiso.scss";
import iso from "../../../../assets/repositoryPenarafan/latar/iso.png";
import iso1 from "../../../../assets/repositoryPenarafan/latar/iso_1.png";
import iso2 from "../../../../assets/repositoryPenarafan/latar/iso_2.png";
import iso3 from "../../../../assets/repositoryPenarafan/latar/iso_3.png";
import iso4 from "../../../../assets/repositoryPenarafan/latar/iso_4.png";
import iso5 from "../../../../assets/repositoryPenarafan/latar/iso_5.png";
import iso6 from "../../../../assets/repositoryPenarafan/latar/iso_6.png";
import AOS from "aos";

function Ms_Iso() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="msiso" data-aos="fade-down" data-aos-duration="2000">
      <div className="top-h">
        <h2>MS ISO 37122 : 2019</h2>
        <h3>STANDARD INDIKATOR BANDAR PINTAR</h3>
      </div>
      <br />
      <h3 className="h3">TUJUAN PENYEDIAAN STANDARD INDIKATOR</h3>
      <div className="msiso-desc">
        <img src={iso} alt="" />
        <div className="desc">
          <div className="card">
            <img src={iso1} alt="" />

            <p class="card-text mb-1">
              Menjadi <span class="text-cyan">penanda aras</span> dan panduan
              kepada PBT serta pihak yang berkepentingan dalam perancangan ke
              arah bandar pintar.
            </p>
          </div>
          <div className="card">
            <img src={iso2} alt="" />

            <p class="card-text mb-1">
              Mewujudkan <span class="text-cyan">ketersediaan data</span> dan
              membuat keputusan berdasarkan data (driven decision making).
            </p>
          </div>

          <div className="card">
            <img src={iso3} alt="" />

            <p class="card-text mb-1">
              Membantu dalam <span class="text-cyan">mengukur prestasi</span>{" "}
              penyampaian perkhidmatan bandar khususnya berkaitan elemen pintar.
            </p>
          </div>
          <div className="card">
            <img src={iso4} alt="" />

            <p class="card-text mb-1">
              Menjadi alat sokongan bagi{" "}
              <span class="text-cyan">mengukur kematangan</span> (maturity)
              pelaksanaan bandar pintar.
            </p>
          </div>
          <div className="card">
            <img src={iso5} alt="" />

            <p class="card-text mb-1">
              Memastikan pembangunan bandar pintar adalah berdasarkan{" "}
              <span class="text-cyan">
                standard global dan amalan ‘best practice’.
              </span>
            </p>
          </div>
          <div className="card">
            <img src={iso6} alt="" />

            <p class="card-text mb-1">
              Menjadi alat pengukuran bagi{" "}
              <span class="text-cyan">pengiktirafan</span> Bandar Pintar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ms_Iso;
