import Square from "../square/square"

import { useState, Fragment} from 'react'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        console.log('clicked');
        const squaresCopy = squares.slice();
        squaresCopy[i] = 'X';
        setSquares(squaresCopy);
    }
return (
        <Fragment> 
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

export default Board
