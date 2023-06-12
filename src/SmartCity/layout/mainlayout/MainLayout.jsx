import React, { useEffect } from "react";
import BottomBar from "../../components/bottombar/BottomBar";
import Topbar from "../../components/topbar/Topbar";
import "./mainlayout.scss";
import NewNavbar from "../../components/newNavbar/NewNavbar";
import NewFooter from "../../components/newfooter/NewFooter";
function MainLayout({ children, isFooter = true }) {
  return (
    <div className="mainlayout">
      {/* <Navbar /> */}
      {/* <Topbar /> */}
      <NewNavbar />
      {/* <BottomBar /> */}
      <div className="content">{children}</div>
      {isFooter ? <NewFooter /> : null}
    </div>
  );
}

export default MainLayout;
