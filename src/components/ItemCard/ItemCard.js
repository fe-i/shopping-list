import "./ItemCard.css";

function ItemCard({ name, quantity, price }) {
  return (
    <div className="ItemCard">
      <p className="itemName">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default ItemCard;
