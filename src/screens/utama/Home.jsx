import React from "react";
import Navbar from "../navbar/Navbar";
import "./home.scss";
function Home() {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <div className="home">
          <h1>NATIONAL SMART CITY PLATFORM</h1>
          <h3>ADVANCED ANALYTICS FOR FUTURE CITIES</h3>
        </div>
      </div>
    </>
  );
}
export default Home;
