import { useState } from "react";
import Header from "./header";
import CardGrid from "./layout";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function incrementScore() {
    setScore((prev) => prev + 1);
  }

  function endRound() {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      <CardGrid incrementScore={incrementScore} endRound={endRound} />
    </>
  );
}

export default App;
