import React, { useEffect } from "react";
import "./analitikData.scss";
import AOS from "aos";
import governance from "assets/analitik/governance.jpg";
import huni from "assets/analitik/huni.jpg";
import tea from "assets/analitik/tea.jpg";
import social from "assets/analitik/social.jpg";
import economy from "assets/analitik/economy.jpg";
import people from "assets/analitik/people.jpg";
import physical from "assets/analitik/physical.jpg";
function AnalitikData() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="analitik-data"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <h2 className="heading">ANALITIK DATA RAYA BANDAR PINTAR NEGARA</h2>
      <div className="profiles">
        <div className="card">
          <img src={governance} alt="" />
          <p>Smart Governance</p>
        </div>
        <div className="card">
          <img src={huni} alt="" />
          <p>Smart Living</p>
        </div>
        <div className="card">
          <img src={tea} alt="" />
          <p>Smart Environment</p>
        </div>
        <div className="card">
          <img src={social} alt="" />
          <p>Smart Mobility</p>
        </div>
        <div className="card">
          <img src={economy} alt="" />
          <p>Smart Economy</p>
        </div>
        <div className="card">
          <img src={people} alt="" />
          <p>Smart People</p>
        </div>
        <div className="card">
          <img src={physical} alt="" />
          <p>Smart Digital Infrastructure</p>
        </div>
      </div>
    </div>
  );
}

export default AnalitikData;
