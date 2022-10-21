import { useState } from "react";
import "./itemCard.css";


function ItemCard({ name, initialQty, price, items, setItems, order }) {
  console.log(initialQty + "hi")
  const [quantity, setQuantity] = useState(initialQty);

  return (
    <div className="itemCard">
      <div>
        <p className="itemName">{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>
        <button
        className="modifyButton"
        onClick={() => {
          setQuantity(prompt("New quantity?"));
        }}>
        Modify Quantity
        </button>
      </div>
      <button
        className="removeButton"
        onClick={() => {
          setItems([...items.slice(0, order), ...items.slice(order + 1)]);
        }}>
        -
      </button>
    </div>
  );
}

export default ItemCard;
