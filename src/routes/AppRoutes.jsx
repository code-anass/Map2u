import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainlayout/MainLayout";
import NestedLayout from "../layout/nestedlayout/NestedLayout";
import AnalitikData from "../screens/analitikData/AnalitikData";
import HubungiKami from "../screens/hubungiKami/HubungiKami";
import LatarBelakang from "../screens/latarBelakang/LatarBelakang";
import PlatformIntegrasi from "../screens/platformIntegrasi/PlatformIntegrasi";
import ProfileBandar from "../screens/profileBandar/ProfileBandar";
import Home from "../screens/utama/Home";
import KategoryPenarafan from "../screens/repositoryPenarafan/kategorypenarafan/KategoryPenarafan";
import RpLatarBelakang from "../screens/repositoryPenarafan/latarbelakang/RpLatarBelakang";
import PilanTindakan from "../screens/muatTurun/pilantindakan/PilanTindakan";
import ProfilePbt from "../screens/repositoryPenarafan/profilePbt/ProfilePbt";
import StatusPencapain from "../screens/repositoryPenarafan/statuspencapaian/StatusPencapain";
import PengurusanPenarafan from "../screens/repositoryPenarafan/pengurusanPenarafan/PengurusanPenarafan";
import SmartCityNewForm from "../screens/repositoryPenarafan/smartcity/smartCityNewForm/SmartCityNewForm";
import SmartCityDetails from "../screens/repositoryPenarafan/smartcity/details/SmartCityDetails";

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
          path="/pilan-tindakan"
          element={
            <MainLayout>
              <NestedLayout>
                <PilanTindakan />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/profil-pbt"
          element={
            <MainLayout>
              <NestedLayout>
                <ProfilePbt />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/status-pencapaian"
          element={
            <MainLayout>
              <NestedLayout>
                <StatusPencapain />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/pengurusan-penarafan"
          element={
            <MainLayout>
              <NestedLayout>
                <PengurusanPenarafan />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/smartcity/new"
          element={
            <MainLayout>
              <NestedLayout>
                <SmartCityNewForm />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/smartcity/details/:id"
          element={
            <MainLayout>
              <NestedLayout>
                <SmartCityDetails />
              </NestedLayout>
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
