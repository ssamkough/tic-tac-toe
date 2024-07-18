"use client"
import { useState } from 'react';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width': '60px',
  'height': '60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

const gameStyle = {
  'backgroundColor': '#eee',
  'height': "200vh"
}

function Square( {
  xIndex, yIndex, value, setGameState, nextValue, setNextValue
} : 
  { xIndex: number, yIndex: number, value?: "X" | "O", setGameState: () => {}, nextValue: "X" | "O" | null , setNextValue: () => {}
} ) {

  const onClick = () => {

    console.log('xIndex', xIndex)
    console.log('yIndex', yIndex)

    console.log('nextValue', nextValue)

    setGameState((gameState) => {
      gameState[xIndex][yIndex] = nextValue;
      return gameState;
    })

    setNextValue((currValue) => currValue === "X" ? "O" : "X")
  }

  return (
    <div
      className="square"
      style={squareStyle}
      onClick={onClick}
    >
      {value ?? null}
    </div>
  );
}

const INITIAL_GAME_STATE = [
  [null, null, null], 
  [null, null, null], 
  [null, null, null],
]

function Board() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [nextValue, setNextValue] = useState("X");

  const onReset = () => {
    setGameState(INITIAL_GAME_STATE)
    setNextValue("X")
  }

  // useeffect
  // gamestate
  // 

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>X</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span></span></div>
      <button style={buttonStyle} onClick={onReset}>Reset</button>
      <div style={boardStyle}>
        {gameState.map((row, i) => 
        <div key={i} className="board-row" style={rowStyle}>
          {row.map((square, j) => (
            <Square key={`${i}${j}`} xIndex={i} yIndex={j} value={square} setGameState={setGameState} nextValue={nextValue} setNextValue={setNextValue} />
          ))}
        </div>
        )}
      </div>
    </div>
  );

}

export default function Game() {
  return (
    <div className="game" style={gameStyle}>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}