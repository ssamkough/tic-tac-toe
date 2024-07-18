"use client";
import Square from "@/components/Square";
import type { BoardPlayerValue, BoardState } from "@/utils/types";
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useEffect, useState } from "react";

const INITIAL_GAME_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const INITIAL_NEXT_VALUE = "X";

const isWinner = (
  gameState: BoardState,
  value: BoardPlayerValue,
  setWinner: Dispatch<SetStateAction<BoardPlayerValue | undefined>>
) => {
  if (
    // rows
    (gameState[0][0] === value &&
      gameState[0][1] === value &&
      gameState[0][2] === value) ||
    (gameState[1][0] === value &&
      gameState[1][1] === value &&
      gameState[1][2] === value) ||
    (gameState[2][0] === value &&
      gameState[2][1] === value &&
      gameState[2][2] === value) ||
    // cols
    (gameState[0][0] === value &&
      gameState[1][0] === value &&
      gameState[2][0] === value) ||
    (gameState[0][1] === value &&
      gameState[1][1] === value &&
      gameState[2][1] === value) ||
    (gameState[0][2] === value &&
      gameState[1][2] === value &&
      gameState[2][2] === value) ||
    // diagnols
    (gameState[0][0] === value &&
      gameState[1][1] === value &&
      gameState[2][2] === value) ||
    (gameState[2][0] === value &&
      gameState[1][1] === value &&
      gameState[0][2] === value)
  ) {
    setWinner(value);
    return true;
  }
};

export default function Board() {
  const [gameState, setGameState] = useState<BoardState>(INITIAL_GAME_STATE);
  const [nextValue, setNextValue] =
    useState<BoardPlayerValue>(INITIAL_NEXT_VALUE);
  const [winner, setWinner] = useState<BoardPlayerValue>();

  const resetGame = useCallback(() => {
    setGameState((currGameState) =>
      currGameState.map((row) => row.map((square) => (square = null)))
    );
    setNextValue(INITIAL_NEXT_VALUE);
    setWinner(undefined);
  }, []);

  useEffect(() => {
    if (isWinner(gameState, "X", setWinner)) return;
    isWinner(gameState, "O", setWinner);
  }, [gameState]);

  useEffect(() => {
    if (winner) {
      alert(`The winner is ${winner} !!!`);
      resetGame();
    }
  }, [resetGame, winner]);

  return (
    <div className="flex flex-col items-center">
      <div id="statusArea" className="mt-6 mb-2 font-bold text-lg">
        Next player: <span>{nextValue}</span>
      </div>
      <div id="winnerArea" className="mt-2 mb-2 font-bold text-lg">
        Winner: <span>{winner ?? "???"}</span>
      </div>
      <button
        className="mt-2 mb-2 p-4 text-lg bg-slate-300 text-black"
        onClick={resetGame}
      >
        Reset
      </button>
      <div className="mt-2 flex flex-col items-center justify-center">
        {gameState.map((row, i) => (
          <div key={i} className="flex">
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
