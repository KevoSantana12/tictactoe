import React, { useRef, useState } from "react";
import './TicTacToe.css'
import Circle from '../assets/circle.png'
import Cross from '../assets/cross.png'

let data = ["","","","","","","","",""]

function TicTacToe (){
    let [unlock,setUnLock] = useState(true)
    const [count, setCount] = useState(0)

    const refTitle = useRef(null);
    let box0 = useRef(null)
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let boxes=[box0,box1,box2,box3,box4,box5,box6,box7,box8];


    function handleClick (e, num){
        if(unlock) {
            if (count % 2 === 0){
                e.target.innerHTML = `<img src="${Cross}">`
                data[num]="X"
            } else {
                e.target.innerHTML = `<img src="${Circle}">`
                data[num]="O"
            }
            checkwin(data)
            setCount(count + 1)    
        }
    }

    function checkwin(data){
        if (data[0] === data[1] & data[1] === data[2] && data[2] !== ""){
            winner(data[2])
            setUnLock(false);
        }
        else if (data[3] === data[4] & data[4] === data[5] && data[5] !== ""){
            winner(data[5])
            setUnLock(false);
        } 
        else if (data[6] === data[7] & data[7] === data[8] && data[8] !== ""){
            winner(data[8])
            setUnLock(false);
        }
        else if (data[0] === data[3] & data[3] === data[6] && data[6] !== ""){
            winner(data[6])
            setUnLock(false);
        }
        else if (data[1] === data[4] & data[4] === data[7] && data[7] !== ""){
            winner(data[7])
            setUnLock(false);
        } 
        else if (data[2] === data[5] & data[5] === data[8] && data[8] !== ""){
            winner(data[8])
            setUnLock(false);
        } 
        else if (data[0] === data[4] & data[4] === data[8] && data[8] !== ""){
            winner(data[8])
            setUnLock(false);
        } 
        else if (data[2] === data[4] & data[4] === data[6] && data[6] !== ""){
            winner(data[6])
            setUnLock(false);
        }    
    
    }

    function winner(winner){
        refTitle.current.innerHTML = `${winner} Wins! <span>Congratulations!</span>`
    }

    function reset(){
        data = ["","","","","","","","",""]
        refTitle.current.innerHTML = `Tic Tac Toe game in <span>ReactJS</span>`
        boxes.forEach((boxRef)=>{
            boxRef.current.innerHTML = ""
        })
        setCount(0);
        setUnLock(true);
    }

    return (
        <>
        <h1>
            <div className="container">
                    <h1 className="tittle" ref={refTitle}>Tic Tac Toe game in <span>ReactJS</span></h1>
                <div className="board">
                    <div className="row">
                        <div className="boxes" ref={box0} onClick={(e)=>handleClick(e,0)}></div>
                        <div className="boxes" ref={box1} onClick={(e)=>handleClick(e,1)}></div>
                        <div className="boxes" ref={box2} onClick={(e)=>handleClick(e,2)}></div>
                    </div>
                    <div className="row">
                        <div className="boxes" ref={box3} onClick={(e)=>handleClick(e,3)}></div>
                        <div className="boxes" ref={box4} onClick={(e)=>handleClick(e,4)}></div>
                        <div className="boxes" ref={box5} onClick={(e)=>handleClick(e,5)}></div>
                    </div>
                    <div className="row">
                        <div className="boxes" ref={box6} onClick={(e)=>handleClick(e,6)}></div>
                        <div className="boxes" ref={box7} onClick={(e)=>handleClick(e,7)}></div>
                        <div className="boxes" ref={box8} onClick={(e)=>handleClick(e,8)}></div>
                    </div>

                    <button className="reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </h1>
        </>
    )
}

export default TicTacToe