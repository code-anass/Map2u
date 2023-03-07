import React from "react";
import "./header.scss";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
function MyHeader() {
  return (
    <div className="my-header">
      <div className="my-heading">Rancangan Fizikal Negara (RFN)</div>
      <div className="my-profile">
        <HiOutlineBell className="icon" />
        <span>Hi, Muhammad Khan</span>
        <BiUserCircle className="icon" />
      </div>
    </div>
  );
}

export default MyHeader;
