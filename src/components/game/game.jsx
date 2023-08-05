// Libs
import { useState } from "react"

// Components
import Board from "../board/board.jsx"

const Game = () => {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    const handlePlay = ( newSquares ) => {
        const newHistory = [...history.slice(0, currentMove + 1), newSquares];
        setHistory(newHistory);
        setCurrentMove(newHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    const pastMoves = history.map((_, move) => {
        console.log(history);
        let description;
        if(move > 0)
            description = "Go to move " + move;
        else
            description = "Go to game start";
        return (<li key={move}>
                    <button onClick={ () => {jumpToMove(move)} }> {description} </button> 
                </li>);
    })

    const jumpToMove = (move) => {
        setCurrentMove(move);
        setXIsNext(move % 2 === 0);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext = {xIsNext} squares = {currentSquares} onPlay = {handlePlay}/>
            </div>
            <div className="game-history">
                <ol>{pastMoves}</ol>
            </div>
        </div>
    )
}

export default Game
