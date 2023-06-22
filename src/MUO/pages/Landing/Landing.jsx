import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", flexDirection: "column" }}
    >
      <h1 className="display-1">MUO LANDING PAGE</h1>
      <Link to="/login" className="btn btn-info">
        SIGN IN
      </Link>
    </div>
  );
};

export default Landing;
