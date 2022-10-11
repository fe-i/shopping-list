import "./itemCard.css";

function ItemCard({ name, quantity, price, items, setItems, order }) {
  return (
    <div className="itemCard">
      <div>
        <p className="itemName">{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>
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
