import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

import NewNavbar from "./components/newNavbar/NewNavbar";
import { BrowserRouter } from "react-router-dom";
import NewFooter from "./components/newfooter/NewFooter";
function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
