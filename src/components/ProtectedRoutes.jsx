import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";

const ProtectedRoutes = ({ isLoggedIn, setIsLoggedIn }) => {
  const auth = localStorage.getItem("isLoggedIn");

  const renderPage =
    isLoggedIn || auth ? (
      <>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  return <>{renderPage}</>;
};

export default ProtectedRoutes;
