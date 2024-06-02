import {
  GRID_ROWS,
  GRID_COLS,
  GRID_SIZE,
  MIN_SNAKE_LENGTH,
  MAX_SNAKE_LENGTH,
} from "./constant";

export const getRandomPosition = () => Math.floor(Math.random() * GRID_SIZE);

export const getRandomSnakeLength = () =>
  Math.floor(Math.random() * (MAX_SNAKE_LENGTH - MIN_SNAKE_LENGTH + 1)) +
  MIN_SNAKE_LENGTH;

export const getRandomAdjacentPosition = (position) => {
  const directions = [-1, 1, -GRID_COLS, GRID_COLS]; // left, right, up, down
  const randomDirection =
    directions[Math.floor(Math.random() * directions.length)];
  let newPosition = position + randomDirection;

  if (
    newPosition < 0 ||
    newPosition >= GRID_SIZE ||
    (position % GRID_COLS === 0 && randomDirection === -1) ||
    ((position + 1) % GRID_COLS === 0 && randomDirection === 1)
  ) {
    newPosition = position;
  }

  return newPosition;
};

export const generateRandomSnake = () => {
  const length = getRandomSnakeLength();
  const snake = [];
  let position = getRandomPosition();

  for (let i = 0; i < length; i++) {
    snake.push(position);
    position = getRandomAdjacentPosition(position);
  }
  return snake;
};
