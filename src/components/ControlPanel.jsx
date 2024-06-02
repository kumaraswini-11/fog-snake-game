const ControlPanel = ({ score, isGameRunning, onStartStopClick }) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onStartStopClick}
        className="mb-3 rounded bg-blue-600 px-4 py-2 text-white"
      >
        {isGameRunning ? "Stop" : "Start"}
      </button>
      <div className="text-black">Score: {score}</div>
    </div>
  );
};

export default ControlPanel;
