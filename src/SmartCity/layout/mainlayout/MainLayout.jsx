import React, { useEffect } from "react";
import BottomBar from "components/smartCity/bottombar/BottomBar";
import "./mainlayout.scss";
import NewNavbar from "components/smartCity/newNavbar/NewNavbar";
import NewFooter from "components/smartCity/newfooter/NewFooter";
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
