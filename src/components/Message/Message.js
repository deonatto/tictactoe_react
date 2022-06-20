import React from 'react';
import './Message.css';

const Message = ({winner, result, restart}) => {
  return (
    <div className='message-container'>
        <p>{winner}</p>
        <p>{result}</p>
        <button onClick={restart}>Restar Game</button>
    </div>
  )
}

export default Message