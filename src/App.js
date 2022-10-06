import { useEffect, useState } from "react";
import "./App.css";
import CreateButton from "./components/createButton/createButton";
import ItemCard from "./components/ItemCard/ItemCard";

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

      <ItemCard name="pencil" quantity={2} price={0.51} />
      <ItemCard name="pens" quantity={3} price={1.23} />
      <ItemCard name="highlighters" quantity={1} price={2.11} />
    </div>
  );
}

export default App;
