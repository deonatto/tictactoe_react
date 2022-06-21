import React, { useEffect } from 'react';
import './Message.css';
import {useSelector, useDispatch} from 'react-redux';
import {usersActions} from '../../redux/users';
import {useNavigate} from 'react-router-dom';

const Message = ({winner, restart}) => {
  //get users state
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const history = useNavigate();
  
  //add win to winner
  useEffect(()=>{
    dispatch(usersActions.addWin(winner));
  },[]);

  //end game and send back to login page
  const endGame = () =>{
    dispatch(usersActions.endGame());
    history('/');
  }

  return (
    <div className='message-container'>
        <p className='message'>{winner === 'X' ? `Winner: ${users[0].name}` : winner === 'O' ? `Winner: ${users[1].name}` : 'It is a Tie'}</p>
        <p className='message'>{`Player ${users[0].name} won ${users[0].wins} times`}</p>
        <p className='message'>{`Player ${users[1].name} won ${users[1].wins} times`}</p>
        <button className='btn restart-btn' onClick={restart}>Restar Game</button>
        <button className='btn end-btn' onClick={endGame}>End Game</button>
    </div>
  )
}

export default Message