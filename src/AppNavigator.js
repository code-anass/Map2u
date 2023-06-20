import React, { useState } from "react";
import SmartCity from "./routes/SmartCity";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import "assets/boxicons/css/boxicons.min.css";
import "assets/remixicon/remixicon.css";
import "assets/bootstrap-icons/bootstrap-icons.css";
import "assets/bootstrap/css/bootstrap.min.css";
import Navbar from "components/muo/navbar/Navbar";
import Sidebar from "components/muo/sidebar/Sidebar";
import Main from "./routes/Main";
import Login from "./MUO/pages/Auth/Login/Login";
import Register from "./MUO/pages/Auth/Register/Register";
// Redux
import { useSelector } from "react-redux";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isSmartCity, setIsSmartCity] = useState(false);
  const AuthUser = useSelector((state) => state.authUser.auth);

  console.log("=-ANAS REDUX", AuthUser);
  return (
    <>
      {false ? (
        <div>
          <Navbar />
          <Sidebar />
          <main id="main" className="main">
            <Main />
          </main>
        </div>
      ) : isSmartCity ? (
        <ProSidebarProvider>
          <SmartCity />
        </ProSidebarProvider>
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
