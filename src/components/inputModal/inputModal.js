import React from "react";
import "./inputModal.css";

const InputModal = ({ addNew }) => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                addNew(e.target[0].value, e.target[1].value, e.target[2].value);
                document.getElementById("inputModal").setAttribute("hidden", "hidden");
            }}>
                <label>Name: </label>
                <input type="text" name="name" required/>
                <br />
                <label>Quantity: </label>
                <input type="number" name="quantity" required/>
                <br />
                <label>Price: $</label>
                <input type="text" name="price" required/>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default InputModal;