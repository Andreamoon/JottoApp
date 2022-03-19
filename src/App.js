import React from "react";
import "./app.css";

export function App() {
  const [count, setCount] = React.useState(0);
  const [displayMsg, setDislayMsg] = React.useState(false);
  function increment() {
    setCount(count + 1);
    if (count === 0) {
      setDislayMsg(false);
    }
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
      setDislayMsg(false);
    } else {
      setDislayMsg(true);
    }
  }
  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      {displayMsg ? (
        <h1 data-test="display-msg">Counter must be plus than 0</h1>
      ) : null}
      <button data-test="increment-button" onClick={() => increment()}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={() => decrement()}>
        Decrement counter
      </button>
    </div>
  );
}
