import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("")

  function changeHandler(event) {
    setText(event.target.value)
    console.log(text)
  }
  return (
    <div className="App">
      <input type="text"  onChange={changeHandler}/>
    </div>
  );
}

export default App;
