import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="CounterApp">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="btns">
          <button
            className="increment"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <button
            className="decrement"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
          <button
            className="clear"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
