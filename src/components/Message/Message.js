import React, { useEffect } from 'react';
import './Message.css';
import {useSelector, useDispatch} from 'react-redux';
import {userActions} from '../../redux/user'

const Message = ({winner, result, restart}) => {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(users);
    dispatch(userActions.addWin(winner));
  },[])
  return (
    <div className='message-container'>
        <p>Winner: {winner === 'X' ? users[0].name : winner === 'O' ? users[0].name : null}</p>
        <p>{result}</p>
        <p>{`Player ${users[0].name} won ${users[0].wins}`}</p>
        <p>{`Player ${users[1].name} won ${users[1].wins}`}</p>
        <button onClick={restart}>Restar Game</button>
    </div>
  )
}

export default Message