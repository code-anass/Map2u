import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainlayout/MainLayout";
import AnalitikData from "../screens/analitikData/AnalitikData";
import HubungiKami from "../screens/hubungiKami/HubungiKami";
import LatarBelakang from "../screens/latarBelakang/LatarBelakang";
import MuatTurun from "../screens/muatTurun/MuatTurun";
import PlatformIntegrasi from "../screens/platformIntegrasi/PlatformIntegrasi";
import ProfileBandar from "../screens/profileBandar/ProfileBandar";
import Home from "../screens/utama/Home";
import KategoryPenarafan from "../screens/repositoryPenarafan/kategorypenarafan/KategoryPenarafan";
import RpLatarBelakang from "../screens/repositoryPenarafan/latarbelakang/RpLatarBelakang";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/latar-belakang"
          element={
            <MainLayout>
              <LatarBelakang />
            </MainLayout>
          }
        />
        <Route
          path="/profile-bandar"
          element={
            <MainLayout>
              <ProfileBandar />
            </MainLayout>
          }
        />
        <Route
          path="/platform-integrasi"
          element={
            <MainLayout>
              <PlatformIntegrasi />
            </MainLayout>
          }
        />
        <Route
          path="/kategory-penarafan"
          element={
            <MainLayout>
              <KategoryPenarafan />
            </MainLayout>
          }
        />
        <Route
          path="/latar-penarafan"
          element={
            <MainLayout>
              <RpLatarBelakang />
            </MainLayout>
          }
        />
        <Route
          path="/analitik-data"
          element={
            <MainLayout>
              <AnalitikData />
            </MainLayout>
          }
        />
        <Route
          path="/muat-turun"
          element={
            <MainLayout>
              <MuatTurun />
            </MainLayout>
          }
        />
        <Route
          path="/hubungi-kami"
          element={
            <MainLayout>
              <HubungiKami />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
