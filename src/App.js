import "./App.css";
import ItemCard from "./components/ItemCard/ItemCard";

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>

      <ItemCard name="pencil" quantity={2} price={0.51}/>
      <ItemCard name="pens" quantity={3} price={1.23}/>
      <ItemCard name="highlighters" quantity={1} price={2.11}/>
    </div>
  );
}

export default App;