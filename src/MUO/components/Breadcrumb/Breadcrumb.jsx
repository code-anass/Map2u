import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <div className="pt-5 px-4">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="index.html" style={{ fontSize: "15px" }}>
              <i className="bi bi-house-door" />
            </Link>
          </li>
          <li className="breadcrumb-item active" style={{ fontSize: "15px" }}>
            <Link to="" style={{ textDecoration: "none" }}>
              {title}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
