import {useState, useEffect} from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import Square from '../../components/Square/Square';
import Message from '../../components/Message/Message';
import './Board.css';

const Board = () => {
    //board state
    const [board, setBoard] = useState([
        {value:"",number:0,checked: false},
        {value:"",number:1,checked: false},
        {value:"",number:2,checked: false},
        {value:"",number:3,checked: false},
        {value:"",number:4,checked: false},
        {value:"",number:5,checked: false},
        {value:"",number:6,checked: false},
        {value:"",number:7,checked: false},
        {value:"",number:8,checked: false}
    ]);
    //players icon
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

    //call checkWinner and changePlayer functions every time board is changed
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
        // if no winner checks if it is a tie
        if(!winner){
            //count all square that don´t have empty string
            board.forEach( item =>{
                if(item.value !== ""){
                    count++
                }
            })
            //check if it is a tie
            if(count === 9){
                setResult({winner:"none", state:"Tie"})
            }
        }

    }
    //restart game function
    const restarGame = () =>{
        setBoard([
            {value:"",number:0,checked: false},
            {value:"",number:1,checked: false},
            {value:"",number:2,checked: false},
            {value:"",number:3,checked: false},
            {value:"",number:4,checked: false},
            {value:"",number:5,checked: false},
            {value:"",number:6,checked: false},
            {value:"",number:7,checked: false},
            {value:"",number:8,checked: false}
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

    //update board state every time user clicks square
    const squareHandler= (squareIndex) =>{ 
        setBoard(prevState => {
            const newState = prevState.map((obj, index)=>{
                //update square values
                if(squareIndex === index){
                    obj.value = player;
                    obj.number = squareIndex;
                    obj.checked = true;
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
            {result.state !== "none" && <Message winner = {result.winner} restart={restarGame}/>}
            <div className='board-container'>
                <div className='column'>
                    <Square board={board[0]} squareHandler={squareHandler}/>
                    <Square board={board[3]} squareHandler={squareHandler}/>
                    <Square board={board[6]} squareHandler={squareHandler}/>
                </div>
                <div className='column'>
                    <Square board={board[1]} squareHandler={squareHandler}/>
                    <Square board={board[4]} squareHandler={squareHandler}/>
                    <Square board={board[7]} squareHandler={squareHandler}/>
                </div>
                <div className='column'>
                    <Square board={board[2]} squareHandler={squareHandler}/>
                    <Square board={board[5]} squareHandler={squareHandler}/>
                    <Square board={board[8]} squareHandler={squareHandler}/>
                </div>

            </div>
        </Wrapper>
    )
}

export default Board;