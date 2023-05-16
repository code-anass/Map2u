import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

import NewNavbar from "./components/newNavbar/NewNavbar";
import { BrowserRouter } from "react-router-dom";
import NewFooter from "./components/newfooter/NewFooter";
import { ProSidebarProvider } from "react-pro-sidebar";
//
//
function App() {
  return (
    <div>
      <ProSidebarProvider>
        <AppRoutes />
      </ProSidebarProvider>
    </div>
  );
}

export default App;
