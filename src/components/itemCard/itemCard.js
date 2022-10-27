import { useState } from "react";
import { deleteCard } from "../../storage/methods";
import "./itemCard.css";


function ItemCard({ id, name, initialQty, price, items, setItems, order }) {
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
          deleteCard(id);
        }}>
        -
      </button>
    </div>
  );
}

export default ItemCard;
