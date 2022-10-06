import React from "react";
import "./createButton.css";

const CreateButton = ({ addNew }) => {
  return <button onClick={() => addNew()}>+</button>;
};

export default CreateButton;
