import React from 'react';
import './Square.css';

const Square = ({value, squareHandler}) => {
    return (
        <div className='row' onClick={squareHandler}>
            {value}
        </div>
    )
}

export default Square;