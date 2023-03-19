import React from "react";
import BottomBar from "../../components/bottombar/BottomBar";
import Navbar from "../../components/navbar/Navbar";
import "./mainlayout.scss";
function MainLayout({ children }) {
  return (
    <div className="mainlayout">
      <Navbar />
      <BottomBar />
      <div className="content">{children}</div>
    </div>
  );
}

export default MainLayout;
