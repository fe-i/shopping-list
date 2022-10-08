import { useEffect, useState } from "react";
import "./App.css";
import CreateButton from "./components/createButton/createButton";
import ItemCard from "./components/itemCard/itemCard";
import InputModal from "./components/inputModal/inputModal";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="App">
      <div id="inputModal" hidden>
        <InputModal addNew={(name, quantity, price) => {
          setItems([...items, { name, quantity, price }]);
        }} />
      </div>
      <h1>Shopping List</h1>
      <CreateButton />
      { items.map((item, i) => <ItemCard {...item} key={i} />) }
    </div>
  );
}

export default App;
