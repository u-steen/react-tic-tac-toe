const Square = ( { value, handleClickFn} ) => {
    return (
         <button className="square"
            onClick={handleClickFn}> {value} </button>
    )
}

export default Square;
