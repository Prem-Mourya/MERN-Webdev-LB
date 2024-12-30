import { useState } from "react";
import "./App.css";
import data from "./data"
import Tours from "./components/Tours";

function App() {

  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour)
  }

  function deleteAll() {
    const empty = setTours([])
    
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(data)} className="btn-white">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours ={tours} removeTour = {removeTour} deleteAll = {deleteAll} ></Tours>
   </div>
  );
}

export default App;
