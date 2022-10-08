import React from "react";
import "./createButton.css";

const CreateButton = () => {
  return <button onClick={() => document.getElementById("inputModal").removeAttribute("hidden")}>+</button>;
};

export default CreateButton;
