import React from "react";
import "./inputModal.css";

const InputModal = () => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log("submit")
            }
            }>
                <input />
                <input />
                <input />
                <button type="submit" />
            </form>
        </div>
    )
}

export default InputModal;