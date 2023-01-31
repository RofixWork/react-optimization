import React from "react";

const Button = ({ width, height, bgcolor, text, onClick }) => {
  return (
    <button
      style={{ width: width, height: height, backgroundColor: bgcolor }}
      onClick={onClick}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
