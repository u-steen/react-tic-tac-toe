import Square from "../square/square"

import { useState, Fragment} from 'react'

const Board = () => {
return (
        <Fragment> 
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </Fragment>
) 
}

export default Board
