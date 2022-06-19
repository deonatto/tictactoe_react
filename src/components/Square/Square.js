import React from 'react';
import './Square.css';

const Square = ({board, squareHandler}) => {
    //avoid changing player when user click on square already clicked
    const checkedHandler = () =>{
        if(!board.checked){
            squareHandler();
        }
    }
    return (
        <div className='row' onClick={checkedHandler}>
            {board.value}
        </div>
    )
}

export default Square;