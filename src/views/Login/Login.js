import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Wrapper from '../../components/Wrapper/Wrapper';
import './Login.css';
import {useDispatch} from 'react-redux';
import {userActions} from '../../redux/user'

const Login = () => {
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const dispatch = useDispatch();
    const history = useNavigate();

    const loginHandler = (event) =>{
        event.preventDefault();
        //dispatch action to store users on users state
        dispatch(userActions.addPlayer(player1));
        dispatch(userActions.addPlayer(player2));
        //send to home page
        history('/board');
    }
  return (
    <Wrapper>
        <form className='form-container'>
            <div className='form-component'>
                <label htmlFor='player1'>Player 1</label>
                <input type='text'className='player-input' id='player1' onChange = {(e)=> setPlayer1(e.target.value)}/>
            </div>
            <div className='form-component'>
                <label htmlFor='player2'>Player 2</label>
                <input type='text' className='player-input'id='player2' onChange = {(e)=> setPlayer2(e.target.value)}/>
            </div>
            <div className='login-btn-container'>
                <button className='login-btn' onClick={loginHandler}>Start Game</button>
            </div>
        </form>
    </Wrapper>
  )
}

export default Login;