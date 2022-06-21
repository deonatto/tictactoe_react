import React from 'react';
import './Square.css';

const Square = ({board, squareHandler}) => {
    //avoid changing player value when user clicks on square that was previously clicked
    const checkedHandler = () =>{
        if(!board.checked){
            squareHandler(board.number);
        }
    }
    return (
        <div className='row' onClick={checkedHandler}>
            {board.value === 'X' ? <i className="fa-solid fa-x"></i> : board.value === 'O' ? <i className="fa-solid fa-o"></i> : null}
        </div>
    )
}

export default Square;