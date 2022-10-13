import { useEffect, useState } from "react";
import "./App.css";
import CreateButton from "./components/createButton/createButton";
import ItemCard from "./components/itemCard/itemCard";
import InputModal from "./components/inputModal/inputModal";

function App() {
  const [items, setItems] = useState([]);
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="App">
      
        <InputModal
        addNew={(name, quantity, price) => {
          setItems([...items, { name, quantity, price }]);
        }}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        />

      <h1>Shopping List</h1>
      <CreateButton setIsShowing={setIsShowing}/>
      { items.map((item, i) => <ItemCard {...item} items={items} setItems={setItems} order={i} key={i} />) }
    </div>
  );
}

export default App;
