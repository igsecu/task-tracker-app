import React from "react";

const Button = ({ text }) => {
  const onClick = (e) => {
    console.log("CLICK");
  };

  return (
    <button type="button" className="btn btn-light px-2 py-1" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
