import type { BoardPlayerValue, BoardState, BoardValue } from "@/utils/types";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  xIndex: number;
  yIndex: number;
  value: BoardValue;
  setGameState: Dispatch<SetStateAction<BoardState>>;
  nextValue: BoardPlayerValue;
  setNextValue: Dispatch<SetStateAction<BoardPlayerValue>>;
}

export default function Square({
  xIndex,
  yIndex,
  value,
  setGameState,
  nextValue,
  setNextValue,
}: Props) {
  const onClick = () => {
    if (value) return alert("Cannot insert—value already placed!");

    setGameState((currGameState) => {
      currGameState[xIndex][yIndex] = nextValue;
      return [...currGameState];
    });

    setNextValue((currNextValue) => (currNextValue === "X" ? "O" : "X"));
  };

  return (
    <div
      className="w-16 h-16 flex items-center justify-center m-1 text-lg text-black bg-slate-300"
      onClick={onClick}
    >
      {value ?? null}
    </div>
  );
}
