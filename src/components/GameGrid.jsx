import { GRID_SIZE } from "../utils/constant";
import { GridCell } from "./";

const GameGrid = ({
  diamondPosition,
  snakes,
  playerPosition,
  onDiamondClick,
  handleMouseMove,
}) => {
  return (
    <div
      className="grid grid-cols-20  grid-rows-10"
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: GRID_SIZE }, (_, index) => (
        <GridCell
          key={index}
          index={index}
          diamondPosition={diamondPosition}
          snakes={snakes}
          playerPosition={playerPosition}
          onDiamondClick={onDiamondClick}
        />
      ))}
    </div>
  );
};

export default GameGrid;
