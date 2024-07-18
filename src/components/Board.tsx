"use client";
import Square from "@/components/Square";
import { useCallback, useEffect, useState } from "react";

const rowStyle = {
  display: "flex",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "black",
  fontSize: "16px",
};

const INITIAL_GAME_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Board() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [nextValue, setNextValue] = useState("X");

  const onReset = useCallback(() => {
    setGameState(INITIAL_GAME_STATE);
    setNextValue("X");
  }, []);

  console.log("gamestate", gameState);

  // useeffect
  // gamestate
  useEffect(() => {}, [gameState]);

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>X</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span></span>
      </div>
      <button style={buttonStyle} onClick={onReset}>
        Reset
      </button>
      <div style={boardStyle}>
        {gameState.map((row, i) => (
          <div key={i} className="board-row" style={rowStyle}>
            {row.map((square, j) => (
              <Square
                key={`${i}${j}`}
                xIndex={i}
                yIndex={j}
                value={square}
                setGameState={setGameState}
                nextValue={nextValue}
                setNextValue={setNextValue}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
