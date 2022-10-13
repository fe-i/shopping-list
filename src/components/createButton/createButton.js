import React from "react";
import "./createButton.css";

const CreateButton = ({ setIsShowing }) => {
  return <button onClick={() => setIsShowing((isShowing) => !isShowing)}>+</button>;
};

export default CreateButton;
