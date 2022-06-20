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
        <p className='message'>{winner === 'X' ? `Winner: ${users[0].name}` : winner === 'O' ? `Winner: ${users[1].name}` : 'It is a Tie'}</p>
        <p className='message'>{`Player ${users[0].name} won ${users[0].wins} times`}</p>
        <p className='message'>{`Player ${users[1].name} won ${users[1].wins} times`}</p>
        <button className='btn restart-btn' onClick={restart}>Restar Game</button>
        <button className='btn end-btn'>End Game</button>
    </div>
  )
}

export default Message