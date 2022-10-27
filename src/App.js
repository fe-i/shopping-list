import { useEffect, useState } from "react";
import "./App.css";
import CreateButton from "./components/createButton/createButton";
import ItemCard from "./components/itemCard/itemCard";
import InputModal from "./components/inputModal/inputModal";
import { getCards } from "./storage/methods";

function App() {
  const [items, setItems] = useState(getCards());
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    console.log(getCards());
  }, [items]);

  return (
    <div className="App">
      <InputModal
        addNew={(id, name, initialQty, price) => {
          setItems([...items, { id, name, initialQty, price }]);
        }}
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />
      <h1>Shopping List</h1>
      <CreateButton setIsShowing={setIsShowing} />
      {items.map((item, i) => <ItemCard {...item} items={items} setItems={setItems} order={i} key={i} />)}
    </div>
  );
}

export default App;
