import React, { useState } from "react";
import SmartCity from "./routes/SmartCity";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/utils/theme";

import "assets/boxicons/css/boxicons.min.css";
import "assets/remixicon/remixicon.css";
import "assets/bootstrap-icons/bootstrap-icons.css";
import "assets/bootstrap/css/bootstrap.min.css";
import Navbar from "components/muo/navbar/Navbar";
import Sidebar from "components/muo/sidebar/Sidebar";
import Main from "./routes/Main";
import Login from "./MUO/pages/Auth/Login/Login";
import Register from "./MUO/pages/Auth/Register/Register";
import Landing from "./MUO/pages/Landing/Landing";
// Redux
import { useSelector } from "react-redux";
import SdgModule from "routes/SdgModule";
import MainPage from "routes/MainPage";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isSmartCity, setIsSmartCity] = useState(false);
  // const AuthUser = useSelector((state) => state.authUser.token);
  const [isSdgModule, setIsSdgModule] = useState(false);
  const [isMainPage, setIsMainPage] = useState(true);
  const [lightMode, setLightMode] = useState(true);

  const fontSize = useSelector((state) => state.fontSizes);
  const fontColor = useSelector((state) => state.fontColors);
  const fontName = useSelector((state) => state.fontNames);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      {false ? (
        isSmartCity ? (
          <ProSidebarProvider>
            <SmartCity />
          </ProSidebarProvider>
        ) : (
          <div>
            <Navbar />
            <Sidebar />
            <main id="main" className="main">
              <Main />
            </main>
          </div>
        )
      ) : isSdgModule ? (
        <SdgModule />
      ) : isMainPage ? (
        <ThemeProvider
          theme={{
            fontSize: fontSize,
            color: lightMode ? lightTheme : darkTheme,
            fontColor: fontColor,
            fontName: fontName,
          }}
        >
          <MainPage />
        </ThemeProvider>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
