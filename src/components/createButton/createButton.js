import React from "react";
import "./createButton.css";

const CreateButton = ({ setIsShowing }) => {
  return <button className="createButton" onClick={() => setIsShowing((isShowing) => !isShowing)}>+</button>;
};

export default CreateButton;
