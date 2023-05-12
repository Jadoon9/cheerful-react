import React from "react";
import Button from "./Common/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>No page found for this path</h1>
      <Button
        text="Go Back"
        onClick={() => {
          navigate(-1);
        }}
        type="button"
        bgcolor="#1A3A5F"
        color="white"
      />
    </div>
  );
};

export default NotFound;
