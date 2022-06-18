import {useState} from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import Square from '../../components/Square/Square';
import './Board.css';

const Board = () => {
    const [board, setBoard] = useState([
        {value:"", checked: false},
        {value:"", checked: false},
        {value:"", checked: false},
        {value:"", checked: false},
        {value:"", checked: false},
        {value:"", checked: false},
        {value:"", checked: false},
        {value:"", checked: false},
        {value:"", checked: false}
    ]);
    const [player, setPlayer] = useState('X')
    
    //function to alternate players
    const changePlayer = (squareIndex) =>{
        if(board[squareIndex])
        if(player === 'X'){
            setPlayer('O');
        }else{
            setPlayer('X');
        }
    }

    // will choose the type of square, if X or O
    const squareHandler= (squareIndex) =>{
        const squareIsChecked = board[squareIndex].checked; 
        // set player value when square clicked by user(starting game with X)
        setBoard(prevState => {
            const newState = prevState.map((obj, index)=>{
                if(squareIndex === index && obj.value === ""){
                    obj.value = player;
                    obj.checked = true
                    return obj
                }else{
                    return obj;
                }
            })
            return newState;
        });
        //avoid changing player value when user clicks on square that was previously clicked
        if(!squareIsChecked){
            changePlayer(squareIndex);
        }

    }
    return (
        <Wrapper>
            <div className='board-container'>
                <div className='column'>
                    <Square value={board[0].value} squareHandler={() => {squareHandler(0)}}/>
                    <Square value={board[3].value} squareHandler={() => {squareHandler(3)}}/>
                    <Square value={board[6].value} squareHandler={() => {squareHandler(6)}}/>
                </div>
                <div className='column'>
                    <Square value={board[1].value} squareHandler={() => {squareHandler(1)}}/>
                    <Square value={board[4].value} squareHandler={() => {squareHandler(4)}}/>
                    <Square value={board[7].value} squareHandler={() => {squareHandler(7)}}/>
                </div>
                <div className='column'>
                    <Square value={board[2].value} squareHandler={() => {squareHandler(2)}}/>
                    <Square value={board[5].value} squareHandler={() => {squareHandler(5)}}/>
                    <Square value={board[8].value} squareHandler={() => {squareHandler(8)}}/>
                </div>

            </div>
        </Wrapper>
    )
}

export default Board;