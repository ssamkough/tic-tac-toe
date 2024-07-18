import Board from "./Board";

const gameStyle = {
  backgroundColor: "#eee",
  height: "200vh",
};

export default function Game() {
  return (
    <div className="game" style={gameStyle}>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
