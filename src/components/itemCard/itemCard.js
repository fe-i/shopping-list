import { useState } from "react";
import { deleteCard, updateCard } from "../../storage/methods";
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
          const newQty = prompt("New quantity?");
          setQuantity(newQty);
          updateCard(id, { id, name, quantity: newQty, price });
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
