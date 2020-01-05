import React from "react";
import { Counter } from "./Components/Counter";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <section>
        <Counter>
          {({ count, setCount }) => (
            <div>
              {count}
              <button onClick={() => setCount(count + 1)}>Plus Button</button>
              <button onClick={() => setCount(count - 1)}>Minus Button</button>
            </div>
          )}
        </Counter>
      </section>
    </div>
  );
};

export default App;
