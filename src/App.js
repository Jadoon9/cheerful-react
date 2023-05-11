import Navbar from "./components/Common/Navbar";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import JournalPage from "./pages/JournalPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<JournalPage />} />
      </Routes>
    </div>
  );
}

export default App;
