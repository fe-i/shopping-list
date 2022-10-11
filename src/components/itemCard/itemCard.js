import "./itemCard.css";

function ItemCard({ name, quantity, price, items, setItems, order }) {
  return (
    <div className="itemCard">
      <div>
        <p className="itemName">{name}</p>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>
      </div>
      <button className="removeButton" onClick={() => {
        const newItems = items;
        newItems.pop();
        setItems(newItems);
      }}>-</button>
    </div>
  );
}

export default ItemCard;