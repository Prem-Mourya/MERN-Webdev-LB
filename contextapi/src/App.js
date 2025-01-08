import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';
function App() {
  return (
    <div className="App">
      <Item name='MacBook Pro' price={100000} />
      <Item name='MacBook' price={80000} />
      <Item name='Iphone' price={79999} />
      <Cart/>
    </div>
  );
}

export default App;
