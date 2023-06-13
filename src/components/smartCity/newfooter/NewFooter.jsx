import React from "react";
import "./newfooter.scss";
import contact from "assets/newfooter/contact.png";
import apple from "assets/newfooter/apple_store.png";
import google from "assets/newfooter/google_play.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
function NewFooter() {
  return (
    <div data-aos="zoom-in" data-aos-duration="2000">
      <div className="new-footer">
        <div className="f-left">
          <div className="item">
            <h3>
              Jabatan Perancangan Bandar dan Desa <br /> (PLANMalaysia)
            </h3>
            <div className="inner-item">
              <img src={contact} alt="" />
              <p>
                Pusat Operasi Malaysia Urban Observatory,
                <br /> Aras 13, Blok F5 Kompleks F, Presint 1<br /> 62675
                Putrajaya
                <br /> MALAYSIA Tel : +(6) 03-8091 0000, Fax : +(6) 03-8091 0455
                <br />
                admin@muo.gov.my
              </p>
            </div>
          </div>
          <div className="item">
            <h3>Pautan</h3>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Terma & Syarat</p>
            </div>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Dasar Privasi</p>
            </div>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Dasar Keselamatan</p>
            </div>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Penafian</p>
            </div>
          </div>
        </div>
        <div className="f-right">
          <div className="item">
            <h3>PENGUNJUNG PORTAL</h3>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Dalam Talian : 2</p>
            </div>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Hari ini : 12</p>
            </div>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Semalam : 14</p>
            </div>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Jumlah : 28</p>
            </div>
            <div className="inner">
              <MdKeyboardArrowRight />
              <p>Maksimum : 841</p>
            </div>
          </div>
          <div className="item">
            <div className="inner-x">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
            <div className="inner-x">
              <BsTwitter className="icon-f" />
              <BsFacebook className="icon-f" />
              <BsInstagram className="icon-f" />
              <BsLinkedin className="icon-f" />
            </div>
            <div className="inner-x">
              <p>
                Paparan terbaik menggunakan Mozilla Firefox
                <br /> versi 50 dan ke atas pada resolusi skrin
                <br /> minimum 1366x768
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-f">
        © Copyright <b>2023 PLANMalaysia National Smart City Platform (NSCP)</b>
      </div>
    </div>
  );
}

export default NewFooter;
