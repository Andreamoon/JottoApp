import React from "react";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
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
    <div data-test="component-app" className="container">
      Jotto
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}
