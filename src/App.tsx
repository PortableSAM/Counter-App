import React from "react";
import { Counter } from "./Components/Counter";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="counter-section">
        <Counter>
          {({ count, setCount }) => (
            <div className="counter-container">
              <section className="counter-number">{count}</section>
              <button onClick={() => setCount(count + 1)}>Plus Button</button>
              <button onClick={() => setCount(count - 1)}>Minus Button</button>
              <button onClick={() => setCount((count = 0))}>
                Reset Button
              </button>
            </div>
          )}
        </Counter>
      </section>
    </div>
  );
};

export default App;
