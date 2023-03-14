import React from "react";
import "./header.scss";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
function MyHeader() {
  return (
    <div className="pvt-header">
      <p className="right">Rancangan Fizikal Negara (RFN)</p>
      <div className="left">
        <HiOutlineBell className="icon" />
        <span>Hi, Luqman Hakeem</span>
        <BiUserCircle className="icon" />
      </div>
    </div>
  );
}

export default MyHeader;
