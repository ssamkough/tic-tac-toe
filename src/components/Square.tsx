interface Props {
  xIndex: number;
  yIndex: number;
  value?: "X" | "O";
  setGameState: () => {};
  nextValue: "X" | "O" | null;
  setNextValue: () => {};
}

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "black",
};

export default function Square({
  xIndex,
  yIndex,
  value,
  setGameState,
  nextValue,
  setNextValue,
}: Props) {
  const onClick = () => {
    if (value) return alert("has value!");

    setGameState((gameState) => {
      gameState[xIndex][yIndex] = nextValue;
      return gameState;
    });

    setNextValue((currValue) => (currValue === "X" ? "O" : "X"));
  };

  return (
    <div className="square" style={squareStyle} onClick={onClick}>
      {value ?? null}
    </div>
  );
}
