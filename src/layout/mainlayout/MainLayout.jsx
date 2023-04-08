import React from "react";
import BottomBar from "../../components/bottombar/BottomBar";
import Topbar from "../../components/topbar/Topbar";
import "./mainlayout.scss";
function MainLayout({ children }) {
  return (
    <div className="mainlayout">
      {/* <Navbar /> */}
      <Topbar />
      <BottomBar />
      <div className="content">{children}</div>
    </div>
  );
}

export default MainLayout;
