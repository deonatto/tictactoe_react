import {useState, useEffect} from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import Square from '../../components/Square/Square';
import Message from '../../components/Message/Message';
import {useSelector, useDispatch} from 'react-redux';
import {userActions} from '../../redux/user'
import './Board.css';

const Board = () => {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();
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
    const [player, setPlayer] = useState('O');
    const [result, setResult] = useState({winner: "none", state: "none"})
    //winning patterns
    const patterns = [
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
    ];

    //call checkWinner function every time board is changed
    useEffect(()=>{
        checkWinner();
        changePlayer();
    }, [board]);
    
    //function to check if someone win
    const checkWinner = () =>{
        let count = 0;
        let winner;
        //check if someone won
        patterns.forEach( pattern =>{
            const firstSquare = board[pattern[0]].value;
            const secondSquare = board[pattern[1]].value;
            const thirdSquare = board[pattern[2]].value;
            if(firstSquare === secondSquare && firstSquare === thirdSquare && firstSquare !== "" && secondSquare !=="" && thirdSquare !== ""){
                setResult({winner:player, state:"Winner"})
                winner = true;
            }
        });
        //count all square that don´t have empty string
        board.forEach( item =>{
            if(item.value !== ""){
                count++
            }
        })
        //check if it is a tie
        if(count === 9){
            if(!winner){
                setResult({winner:"none", state:"Tie"})
            }
        }

    }
    //restart game
    const restarGame = () =>{
        setBoard([
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
        setPlayer('O');
        setResult({winner: "none", state: "none"});
    }
    //function to alternate players
    const changePlayer = () =>{
        if(player === 'X'){
            setPlayer('O');
        }else{
            setPlayer('X');
        }
    }

    // will choose the type of square, if X or O
    const squareHandler= (squareIndex) =>{ 
        // set player value when square is clicked by user(starting game with X)
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

    }
    return (
        <Wrapper>
            {result.state !== "none" && <Message winner = {result.winner} result= {result.state} restart={restarGame}/>}
            <div className='board-container'>
                <div className='column'>
                    <Square board={board[0]} squareHandler={() => {squareHandler(0)}}/>
                    <Square board={board[3]} squareHandler={() => {squareHandler(3)}}/>
                    <Square board={board[6]} squareHandler={() => {squareHandler(6)}}/>
                </div>
                <div className='column'>
                    <Square board={board[1]} squareHandler={() => {squareHandler(1)}}/>
                    <Square board={board[4]} squareHandler={() => {squareHandler(4)}}/>
                    <Square board={board[7]} squareHandler={() => {squareHandler(7)}}/>
                </div>
                <div className='column'>
                    <Square board={board[2]} squareHandler={() => {squareHandler(2)}}/>
                    <Square board={board[5]} squareHandler={() => {squareHandler(5)}}/>
                    <Square board={board[8]} squareHandler={() => {squareHandler(8)}}/>
                </div>

            </div>
        </Wrapper>
    )
}

export default Board;