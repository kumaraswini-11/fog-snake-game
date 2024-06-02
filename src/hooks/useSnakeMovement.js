import { useEffect } from "react";
import { getRandomAdjacentPosition } from "../utils/getSnakeDetails";

const useSnakeMovement = (
  isGameRunning,
  snakes,
  setSnakes,
  diamondPosition,
  setScore
) => {
  useEffect(() => {
    if (!isGameRunning) return;

    const moveSnake = (snake) => {
      const newHead = getRandomAdjacentPosition(snake[0]);
      if (newHead === diamondPosition) {
        setScore((prevScore) => prevScore - 10);
        console.log("Snake touched the diamond! Penalty applied.");
      }
      return [newHead, ...snake.slice(0, -1)];
    };

    const intervalId = setInterval(() => {
      setSnakes((prevSnakes) => prevSnakes.map(moveSnake));
    }, 500);

    return () => clearInterval(intervalId);
  }, [isGameRunning, snakes, setSnakes, diamondPosition, setScore]);
};

export default useSnakeMovement;
