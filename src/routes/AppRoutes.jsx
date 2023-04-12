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
import InsentifKepada from "../screens/repositoryPenarafan/latarbelakang/InsentifKepada/InsentifKepada";
import ProsesPenarafan from "../screens/repositoryPenarafan/latarbelakang/prosesPenarafan/ProsesPenarafan";
import PuncaKuasa from "../screens/repositoryPenarafan/latarbelakang/puncaKuasa/PuncaKuasa";
import Ms_Iso from "../screens/repositoryPenarafan/latarbelakang/ms_iso/Ms_Iso";
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
            <MainLayout isFooter={false}>
              <NestedLayout>
                <RpLatarBelakang />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/latar_belakang/insentif-kepada"
          element={
            <MainLayout isFooter={false}>
              <NestedLayout>
                <InsentifKepada />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/latar_belakang/ms-iso"
          element={
            <MainLayout isFooter={false}>
              <NestedLayout>
                <Ms_Iso />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/latar_belakang/proses-penarafan"
          element={
            <MainLayout isFooter={false}>
              <NestedLayout>
                <ProsesPenarafan />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/latar_belakang/punca-kuasa"
          element={
            <MainLayout isFooter={false}>
              <NestedLayout>
                <PuncaKuasa />
              </NestedLayout>
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
            <MainLayout isFooter={false}>
              <NestedLayout>
                <PilanTindakan />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/profil-pbt"
          element={
            <MainLayout isFooter={false}>
              <NestedLayout>
                <ProfilePbt />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/status-pencapaian"
          element={
            <MainLayout isFooter={false}>
              <NestedLayout>
                <StatusPencapain />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/pengurusan-penarafan"
          element={
            <MainLayout isFooter={false}>
              <NestedLayout>
                <PengurusanPenarafan />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/smartcity/new"
          element={
            <MainLayout isFooter={false}>
              <NestedLayout>
                <SmartCityNewForm />
              </NestedLayout>
            </MainLayout>
          }
        />
        <Route
          path="/smartcity/details/:id"
          element={
            <MainLayout isFooter={false}>
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
