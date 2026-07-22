import "./LudoBoard.css";
import {useState} from "react";
export default function LudoBoard(){
    let [Moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    let [arr, setArr] = useState(["No Moves Yet"]);
    let updateBlue = ()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves, blue: prevMoves.blue + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Blue Move = ${Moves.blue + 1} `]
        })
    }
    let updateYellow = ()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves, yellow: prevMoves.yellow + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Yellow Move = ${Moves.yellow + 1} `]
        })
    }
    let updateGreen = ()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves, green: prevMoves.green + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Green Move = ${Moves.green + 1} `]
        })
    }
    let updateRed = ()=>{
        setMoves((prevMoves)=>{
            return {
                ...prevMoves, red: prevMoves.red + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Red Move = ${Moves.red + 1} `]
        })
    }
    return (
        <>
        <p>Game Begins</p><br />
        <p>Blue move = {Moves.blue}</p>
        <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
        
        <p>yellow move = {Moves.yellow}</p>
        <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>

        <p>green move = {Moves.green}</p>
        <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>

        <p>red move = {Moves.red}</p>
        <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>

        <h3>Moves History:</h3>
        <ul>
            {arr.map((move, index) => (
                <li key={index}>{move}</li>
            ))}
        </ul>
        </>
    )
}