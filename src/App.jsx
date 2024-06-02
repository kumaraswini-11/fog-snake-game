import React, { useState } from "react";
import { ControlPanel, GameGrid, GridCell } from "./components";

const App = () => {
  const [diamondPosition, setDiamondPosition] = useState(getRandomPosition());
  const [snakes, setSnakes] = useState([generateRandomSnake()]);
  const [score, setScore] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [playerPosition, setPlayerPosition] = useState(null); // Player's initial position

  useSnakeMovement(isGameRunning, snakes, setSnakes, diamondPosition, setScore);

  const handleDiamondClick = () => {
    setDiamondPosition(getRandomPosition());
    setScore((prevScore) => prevScore + 10);
    setSnakes((prevSnakes) => [...prevSnakes, generateRandomSnake()]);
    console.log(
      "Diamond collected! Moving to the next level. One more snake added."
    );
  };

  const handleStartStopClick = () => {
    setIsGameRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleMouseMove = (event) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();
    const x = Math.floor(
      (event.clientX - boundingRect.left) / (boundingRect.width / GRID_COLS)
    );
    const y = Math.floor(
      (event.clientY - boundingRect.top) / (boundingRect.height / GRID_ROWS)
    );
    setPlayerPosition(y * GRID_COLS + x);
  };

  return (
    <section className="mx-auto mt-8 w-11/12 p-2">
      <ControlPanel
        score={score}
        isGameRunning={isGameRunning}
        onStartStopClick={handleStartStopClick}
      />
      <GameGrid
        diamondPosition={diamondPosition}
        snakes={snakes}
        playerPosition={playerPosition}
        onDiamondClick={handleDiamondClick}
        handleMouseMove={handleMouseMove}
      />
    </section>
  );
};

export default App;
