import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../MUO/pages/Dashboard/Dashboard";
import Roles from "../MUO/pages/Roles/Roles";
import DashboardPengguna from "../MUO/pages/DashboardPengguna/Dashboard";
import SenaraiPengguna from "../MUO/pages/Pengguna/SenaraiPengguna";
import SenaraiPenggunaBaharu from "../MUO/pages/Pengguna/SenaraiPenggunaBaharu";
import TambahPengguna from "../MUO/pages/Pengguna/TambahPengguna";
import ProfilePengguna from "../MUO/pages/Pengguna/ProfilePengguna";
import ModulUtama from "../MUO/pages/ModulUtama/ModulUtama";
import MenuPemantauan from "../MUO/pages/Menu/MenuPemantauan";
import MenuPenyelidikan from "../MUO/pages/Menu/MenuPenyelidikan/MenuPenyelidikan";
import MenuSokongan from "../MUO/pages/Menu/MenuSokongan";
import DataRepositori from "../MUO/pages/Menu/MenuPenyelidikan/DataRepositori";
import SenaraiPengurusanData from "../MUO/pages/PengurusanData/SenaraiPengurusanData";
import TetapanBerita from "../MUO/pages/CMS/TetapanBerita";
import ServisPeta from "../MUO/pages/ServisPeta/ServisPeta";
const Main = () => {
  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardPengguna" element={<DashboardPengguna />} />
        <Route path="/senaraiPengguna" element={<SenaraiPengguna />} />
        <Route
          path="/senaraiPenggunaBaharu"
          element={<SenaraiPenggunaBaharu />}
        />
        <Route path="/tambahPengguna" element={<TambahPengguna />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/profilePengguna" element={<ProfilePengguna />} />
        <Route path="/modulUtama" element={<ModulUtama />} />
        <Route
          path="/senaraiPengurusanData"
          element={<SenaraiPengurusanData />}
        />
        <Route path="/menuPemantauan" element={<MenuPemantauan />} />
        <Route path="/menuPenyelidikan" element={<MenuPenyelidikan />} />
        <Route path="/menuSokongan" element={<MenuSokongan />} />
        <Route path="/dataRepositori" element={<DataRepositori />} />
        <Route path="/tetapanBerita" element={<TetapanBerita />} />
        <Route path="/servisPeta" element={<ServisPeta />} />
      </Routes>
  );
};

export default Main;
