import React from "react";

const Button = ({ text, onAdd, showAddTask }) => {
  return (
    <button
      type="button"
      className={`btn ${showAddTask ? "btn-danger" : "btn-success"} px-2 py-1`}
      onClick={onAdd}
    >
      {text}
    </button>
  );
};

export default Button;
