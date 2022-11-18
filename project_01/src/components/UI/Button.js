import React from "react";

const Button = ({ label, onClick, submit }) => {
  return (
    <button onClick={onClick} {...(submit && { type: "submit" })}>
      {label}
    </button>
  );
};

export default Button;
