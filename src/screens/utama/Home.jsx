import React, { useEffect } from "react";
import "./home.scss";
import AOS from "aos";
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="home" data-aos="fade-down" data-aos-duration="1000"></div>
  );
}
export default Home;
