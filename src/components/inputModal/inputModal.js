import React from "react";
import "./inputModal.css";

const InputModal = ({ addNew, isShowing, setIsShowing }) => {
    return (
        <div className={`inputModal ${!isShowing && "invisible"}`}>
            <div className="closeButtonContainer">
                <button className="closeButton" onClick={() => setIsShowing(false)}>X</button>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                addNew(e.target[0].value, e.target[1].value, e.target[2].value);
                setIsShowing(false);
            }}>
                <div className="field">
                <label>Name: </label>
                <input type="text" name="name" required/>
                </div>
                <div className="field">
                <label>Quantity: </label>
                <input type="number" name="quantity" required/>
                </div>
                <div className="field">
                <label>Price: $</label>
                <input type="text" name="price" required/>
                </div>
                <button className="addButton" type="submit">Add</button>
            </form>
        </div>
    )
}

export default InputModal;