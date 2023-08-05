import Square from "../square/square"
import { Fragment } from "react";

const Board = ( {xIsNext, squares, onPlay} ) => {

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
      if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

return (
        <Fragment> 
            <h1> {status} </h1>
            <div className="board-row">
                <Square value={squares[0]} handleClickFn={ () => {handleClick(0)}}/>
                <Square value={squares[1]} handleClickFn={ () => {handleClick(1)}}/>
                <Square value={squares[2]} handleClickFn={ () => {handleClick(2)}}/>
            </div>
    
            <div className="board-row">
                <Square value={squares[3]} handleClickFn={ () => {handleClick(3)}}/>
                <Square value={squares[4]} handleClickFn={ () => {handleClick(4)}}/>
                <Square value={squares[5]} handleClickFn={ () => {handleClick(5)}}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} handleClickFn={ () => {handleClick(6)}}/>
                <Square value={squares[7]} handleClickFn={ () => {handleClick(7)}}/>
                <Square value={squares[8]} handleClickFn={ () => {handleClick(8)}}/>
            </div>
        </Fragment>
) 
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board
