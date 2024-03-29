import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../SmartCity/layout/mainlayout/MainLayout";
import NestedLayout from "../SmartCity/layout/nestedlayout/NestedLayout";
import AnalitikData from "../SmartCity/screens/analitikData/AnalitikData";
import HubungiKami from "../SmartCity/screens/hubungiKami/HubungiKami";
import LatarBelakang from "../SmartCity/screens/latarBelakang/LatarBelakang";
import PlatformIntegrasi from "../SmartCity/screens/platformIntegrasi/PlatformIntegrasi";
import ProfileBandar from "../SmartCity/screens/profileBandar/ProfileBandar";
import Home from "../SmartCity/screens/utama/Home";
import KategoryPenarafan from "../SmartCity/screens/repositoryPenarafan/kategorypenarafan/KategoryPenarafan";
import RpLatarBelakang from "../SmartCity/screens/repositoryPenarafan/latarbelakang/RpLatarBelakang";
import PilanTindakan from "../SmartCity/screens/muatTurun/pilantindakan/PilanTindakan";
import StatusPencapain from "../SmartCity/screens/repositoryPenarafan/statuspencapaian/StatusPencapain";
import PengurusanPenarafan from "../SmartCity/screens/repositoryPenarafan/pengurusanPenarafan/PengurusanPenarafan";
import SmartCityNewForm from "../SmartCity/screens/repositoryPenarafan/smartcity/smartCityNewForm/SmartCityNewForm";
import SmartCityDetails from "../SmartCity/screens/repositoryPenarafan/smartcity/details/SmartCityDetails";
import InsentifKepada from "../SmartCity/screens/repositoryPenarafan/latarbelakang/InsentifKepada/InsentifKepada";
import ProsesPenarafan from "../SmartCity/screens/repositoryPenarafan/latarbelakang/prosesPenarafan/ProsesPenarafan";
import PuncaKuasa from "../SmartCity/screens/repositoryPenarafan/latarbelakang/puncaKuasa/PuncaKuasa";
import Ms_Iso from "../SmartCity/screens/repositoryPenarafan/latarbelakang/ms_iso/Ms_Iso";
import Permohonan from "../SmartCity/screens/repositoryPenarafan/permohonanpenarafan/permohonan/Permohonan";
import PetiMasuk from "../SmartCity/screens/repositoryPenarafan/permohonanpenarafan/petimasuk/PetiMasuk";
import StatusPermohonan from "../SmartCity/screens/repositoryPenarafan/permohonanpenarafan/statusPermohonan/StatusPermohonan";
import ProfilePbt from "../SmartCity/screens/repositoryPenarafan/permohonanpenarafan/profilePbt/ProfilePbt";
import AdminLayout from "../SmartCity/layout/adminlayout/AdminLayout";
import AdminDashboard from "../SmartCity/screens/adminModule/dashboard/AdminDashboard";
import KemaskiniPemantauan from "../SmartCity/screens/adminModule/pengurusanModule/kemaskiniPemantauan/KemaskiniPemantauan";
import CmsModule from "../SmartCity/screens/adminModule/pengurusanModule/cmsModule/CmsModule";
import KemiskiniFormula from "../SmartCity/screens/adminModule/tetapanpemantauan/kemaskiniformula/KemaskiniFormula";
import TetapanAgensi from "../SmartCity/screens/adminModule/tetapanpemantauan/tetapanagensi/TetapanAgensi";
import Pengesahan from "../SmartCity/screens/adminModule/pengesahan/Pengesahan";
import Rumusan from "../SmartCity/screens/adminModule/rumusan/Rumusan";
import PengesahanPemanta from "../SmartCity/screens/adminModule/pengesahan/pengesahanpemantauan/PengesahanPemanta";
function SmartCity() {
  return (
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
        path="/permohonan_penarafan/permohonan"
        element={
          <MainLayout isFooter={false}>
            <NestedLayout>
              <Permohonan />
            </NestedLayout>
          </MainLayout>
        }
      />
      <Route
        path="/permohonan_penarafan/petimasuk"
        element={
          <MainLayout isFooter={false}>
            <NestedLayout>
              <PetiMasuk />
            </NestedLayout>
          </MainLayout>
        }
      />
      <Route
        path="/permohonan_penarafan/statuspermohonan"
        element={
          <MainLayout isFooter={false}>
            <NestedLayout>
              <StatusPermohonan />
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
      {/* ADMIN MODULE ROUTES */}
      <Route
        path="/admin"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/kemaskini"
        element={
          <AdminLayout>
            <KemaskiniPemantauan />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/cmsmodule"
        element={
          <AdminLayout>
            <CmsModule />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/kemiskiniformula"
        element={
          <AdminLayout>
            <KemiskiniFormula />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/tetapanagensi"
        element={
          <AdminLayout>
            <TetapanAgensi />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/pengesahan"
        element={
          <AdminLayout>
            <Pengesahan />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/rumusan"
        element={
          <AdminLayout>
            <Rumusan />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/pengesahanpemant"
        element={
          <AdminLayout>
            <PengesahanPemanta />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default SmartCity;
