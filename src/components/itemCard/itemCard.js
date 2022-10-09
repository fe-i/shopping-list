import "./itemCard.css";

function ItemCard({ name, quantity, price }) {
  return (
    <div className="itemCard">
      <div>
        <p className="itemName">{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>
      </div>
      <button className="removeButton">-</button>
    </div>
  );
}

export default ItemCard;