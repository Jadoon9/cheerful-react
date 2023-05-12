import React from "react";
import Button from "../components/Common/Button";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <h1>Login</h1>
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
      /> */}

      <div class="contain">
        <div class="login-form">
          <h3>Welcome back</h3>
          <p>Welcome back! Please enter your Details</p>
          <form action="">
            <div class="mb-3">
              <label for="" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Username@shop.com"
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                placeholder="*********"
              />
            </div>
            <a href="" class="float-end mb-3">
              Forgot Password
            </a>
            <button
              type="submit"
              class="btn btn-primary form-control"
              onClick={() => {
                setIsLoggedIn(true);
                localStorage.setItem("isLoggedIn", true);
                navigate("/journal");
              }}
            >
              Sign In
            </button>
            <p class="orline">or</p>
            <p class="my-3 text-center">
              Don’t have an account? <a href="">Sign up for free</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
