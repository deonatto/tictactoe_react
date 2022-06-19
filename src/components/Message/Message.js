import React from 'react'

const Message = ({winner, result, restart}) => {
  return (
    <div>
        <p>{winner}</p>
        <p>{result}</p>
        <button onClick={restart}>Restar Game</button>
    </div>
  )
}

export default Message