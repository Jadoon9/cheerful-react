import React from "react";
import Button from "../components/Common/Button";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <Button
        text="Login"
        onClick={() => {
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", true);
          navigate("/journal");
        }}
        type="button"
        bgcolor="#1A3A5F"
        color="white"
      />
    </div>
  );
};

export default Login;
