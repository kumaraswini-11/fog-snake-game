const GridCell = ({
  index,
  diamondPosition,
  snakes,
  playerPosition,
  onDiamondClick,
}) => {
  const isDiamond = index === diamondPosition;
  const isSnake = snakes.flat().includes(index);
  const isPlayer = index === playerPosition;

  return (
    <div
      className={`flex items-center justify-center border border-white text-center text-white ${
        isDiamond
          ? "cursor-pointer bg-blue-800"
          : isSnake
            ? "bg-red-500"
            : isPlayer
              ? "bg-green-500"
              : "bg-black"
      }`}
      onClick={isDiamond ? onDiamondClick : null}
    >
      {index + 1}
    </div>
  );
};

export default GridCell;
