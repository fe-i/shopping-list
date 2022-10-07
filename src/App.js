import { useEffect, useState } from "react";
import "./App.css";
import CreateButton from "./components/createButton/createButton";
import ItemCard from "./components/itemCard/itemCard";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <CreateButton
        addNew={() => {
          setItems([...items, { name: "pencil", quantity: 1, price: 1.2 }]);
        }}
      />
      { items.map((item, i) => <ItemCard {...item} key={i} />) }
    </div>
  );
}

export default App;
