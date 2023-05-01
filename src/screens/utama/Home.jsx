import React, { useEffect } from "react";
import "./home.scss";
import home from "../../assets/utama/bg_main.png";
import AOS from "aos";
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="home" data-aos="fade-down" data-aos-duration="1000">
      <img src={home} />
      <div className="headings-main">
        <h1>PLATFORM BANDAR PINTAR NEGARA</h1>
        <h3>"ADVANCED ANALYTICS FOR FUTURE CITIES"</h3>
      </div>
    </div>
  );
}
export default Home;
