import React from "react";
import "./inputModal.css";

const InputModal = () => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(e.target[0].value)
            }
            }>
                <input type="text" id="fname" name="fname"/>
                <input />
                <input />
                <button type="submit" />
            </form>
        </div>
    )
}

export default InputModal;