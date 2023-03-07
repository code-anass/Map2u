import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../screens/navbar/Navbar";
import Home from "../screens/utama/Home";
import About from "../screens/about/About";
import ProfileNSCP from "../screens/profilenscp/ProfileNSCP";
import PvtLayout from "../layout/PvtLayout";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile-nscp" element={<ProfileNSCP />} />
        <Route path="/muo" element={<PvtLayout>hello</PvtLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
