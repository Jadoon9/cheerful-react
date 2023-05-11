import React from "react";

const Button = ({ type, text, onClick, bgcolor, color }) => {
  return (
    <button
      type={type}
      class="btn"
      style={{
        borderRadius: "8px",
        backgroundColor: `${bgcolor ? bgcolor : "btn-secondary"} `,
        color: `${color ? color : "black"} `,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
