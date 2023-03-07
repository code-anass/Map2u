import React from "react";
import Navbar from "../navbar/Navbar";
import "./about.scss";
function About() {
  return (
    <>
      <Navbar />
      <div className="app-content">
        <div className="about">
          <h1 className="main-h1">ABOUT NSCP</h1>
          <div className="about-container">
            <div className="desc">
              <h2>GOAL NSCP</h2>
              <p>
                The National Smart City Platform as a network of smart city
                information and data sharing with Local Authorities to deal with
                municipal issues
              </p>
              <br />
              <h2>OBJECTIVE NSCP</h2>
              <ol>
                <li>
                  Facilitating the sharing of municipal data / information
                  online in real time through different sources / platforms to
                  create the country's smart urban data.
                </li>
                <li>
                  Help analyze data / information from various different sources
                  to make data-driven decision making (data driven decision
                  making) more efficiently related to urban development and
                  management.
                </li>
                <li>
                  Monitor and measure the implementation and achievements of
                  cities in Malaysia in the implementation of smart city
                  initiatives (in accordance with ISO 37122) to be on par with
                  cities at the international level.
                </li>
                <li>
                  Support the planning and implementation of the Malaysian Smart
                  City Framework 2019-2025 which has identified Policies,
                  Strategies and Initiatives to meet the National direction to
                  make cities in Malaysia more competitive and reporting to the
                  National Smart City Council.
                </li>
              </ol>
            </div>
            <div className="imgs"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
