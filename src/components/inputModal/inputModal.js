import React from "react";
import { addCard, id } from "../../storage/methods";
import "./inputModal.css";

const InputModal = ({ addNew, isShowing, setIsShowing }) => {
    return (
        <div className={`inputModal ${!isShowing && "invisible"}`}>
            <div className="closeButtonContainer">
                <button className="closeButton" onClick={() => setIsShowing(false)}>X</button>
            </div>
            <div className="formContainer">
            <form onSubmit={(e) => {
                e.preventDefault();
                const ids = id();
                addNew(ids, e.target[0].value, e.target[1].value, e.target[2].value);
                setIsShowing(false);

                addCard({ id: ids, name: e.target[0].value, quantity: e.target[1].value, price: e.target[2].value });
            }}>
                <div className="field">
                <label>Name: </label>
                <input type="text" name="name" required/>
                </div>
                <div className="field">
                <label>Quantity: </label>
                <input type="number" name="initialQty" required/>
                </div>
                <div className="field">
                <label>Price: $</label>
                <input type="text" name="price" required/>
                </div>
                <button className="addButton" type="submit">Add</button>
            </form>
            </div>
        </div>
    )
}

export default InputModal;