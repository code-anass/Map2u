import React, { useEffect } from "react";
import "./hubungi.scss";
import AOS from "aos";
import hubungi from "assets/hubungiKami/hubungi.png";
import contact from "assets/hubungiKami/contact.png";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { HiUser } from "react-icons/hi";
function HubungiKami() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="hubung">
      <h2>HUBUNGI KAMI</h2>

      <div
        className="hubungiKami"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="left">
          <img src={hubungi} alt="" />
        </div>
        <div className="right">
          <div className="contact">
            <h5>Jabatan Perancangan Bandar dan Desa Semenanjung Malaysia</h5>
            <img src={contact} />
            <h5>Pusat Operasi Malaysia Urban Observatory (MUO)</h5>
            <div className="address1">
              <p>Blok F5, Kompleks F, Presint 1,</p>
              <p>Pusat Pentadbiran Kerajaan</p>
              <p>Persekutuan, 62675 Putrajaya, Malaysia</p>
              <div className="cell">
                <div className="row">
                  <BsTelephoneOutbound className="icon" />
                  <p>+(60) 3-8091 0000</p>
                </div>
                <div className="row">
                  <MdOutlineForwardToInbox className="icon2" />
                  <p>muo@planmalaysia.gov.my</p>
                </div>
                <hr />
              </div>
            </div>
            <h5>Pentadbir Sistem </h5>
            <div className="address1">
              <div className="cell">
                <div className="row">
                  <HiUser className="icon2" />
                  <p>Pegawai MUO</p>
                </div>
                <div className="row">
                  <BsTelephoneOutbound className="icon" />
                  <p>+(60) 3-8091 0000</p>
                </div>
                <hr />
              </div>
            </div>
            <h5>Waktu Operasi</h5>
            <div className="address1">
              <p>Isnin - Jumaat 9:30 pagi - 5.00 petang</p>
              <p>Sabtu - Ahad & Cuti Awam - Tutup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HubungiKami;
