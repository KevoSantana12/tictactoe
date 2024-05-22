import React, { useRef } from "react";
import './TicTacToe.css'
import Circle from '../assets/circle.png'
import Cross from '../assets/cross.png'

let data = ["","","","","","","","",""]

function TicTacToe (){
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



    function handleClick (e, num){
        e.target.innerHTML = `<img src="${Cross}">`
    }

    return (
        <>
        <h1>
            <div className="container">
                <div className="tittle">
                    <h1 className="title" ref={refTitle}>Tic Tac Toe game in <span>ReactJS</span></h1>
                </div>
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

                    <button className="reset">Reset</button>
                </div>
            </div>
        </h1>
        </>
    )
}

export default TicTacToe