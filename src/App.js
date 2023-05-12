import Navbar from "./components/Common/Navbar";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import JournalPage from "./pages/JournalPage";
import { useState } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Clients from "./pages/Clients";
import Assesments from "./pages/Assesments";
import ToolsandGuides from "./pages/ToolsandGuides";
import Notes from "./pages/Notes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          element={
            <ProtectedRoutes
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/assesments" element={<Assesments />} />
          <Route path="/tools-guides" element={<ToolsandGuides />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/journal" element={<JournalPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
