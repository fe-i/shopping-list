import React from "react";
import "./inputModal.css";

const InputModal = () => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target[0].value);
                console.log(e.target[1].value);
                console.log(e.target[2].value);
            }}>
                <label>Name: </label>
                <input type="text" name="name" required value="1"/>
                <br />
                <label>Quantity: </label>
                <input type="number" name="quantity" required value="1"/>
                <br />
                <label>Price: $</label>
                <input type="text" name="price" required value="1"/>
                <br />
                <button type="submit" />
            </form>
        </div>
    )
}

export default InputModal;