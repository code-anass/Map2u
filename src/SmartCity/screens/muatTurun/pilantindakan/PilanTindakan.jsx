import React, { useEffect } from "react";
import "./pilantindakan.scss";
import AOS from "aos";
function PilanTindakan() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="mu-pilantindakan"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div className="heading">
        <h2>PELAN TINDAKAN BANDAR PINTAR</h2>
      </div>
      <div className="content-pilan"></div>
    </div>
  );
}

export default PilanTindakan;
