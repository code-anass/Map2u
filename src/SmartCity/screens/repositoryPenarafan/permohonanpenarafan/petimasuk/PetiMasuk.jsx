import React, { useEffect } from "react";
import "./petimasuk.scss";
import AOS from "aos";
import { BiMessageRounded } from "react-icons/bi";
function PetiMasuk() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="petimasuk-x" data-aos="fade-down" data-aos-duration="2000">
      <h2>Notifications</h2>
      <hr />
      <div className="actions">
        <div className="actions">
          <div className="btn">Delete All</div>
          <div className="btn btn-read">Mark all as read</div>
        </div>
      </div>
      <div className="list">
        <div className="item">
          <BiMessageRounded className="peti-icon" />
          <p>Our Notifications goes here</p>
        </div>
        <div className="item">
          <BiMessageRounded className="peti-icon" />
          <p>Our Notifications goes here</p>
        </div>
        <div className="item">
          <BiMessageRounded className="peti-icon" />
          <p>Our Notifications goes here</p>
        </div>
      </div>
    </div>
  );
}

export default PetiMasuk;
