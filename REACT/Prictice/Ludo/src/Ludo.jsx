import "./Ludo.css";
import { useState } from "react";
export default function Ludo(){
    const [moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});
    const [arr, setArr] = useState(["No Moves Yet!"]);

    function updateBlue(){
        setMoves((prevMoves)=>{
            return {
                ...prevMoves, 
                blue: prevMoves.blue + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Blue player moved ${moves.blue + 1} times`]
        })
    }

    function updateRed(){
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                red: prevMoves.red + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Red player moved ${moves.red + 1} times`]
        })
    }

    function updateGreen(){
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                green: prevMoves.green + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Green player moved ${moves.green + 1} times`]
        })
    }

    function updateYellow(){
        setMoves((prevMoves)=>{
            return {
                ...prevMoves,
                yellow: prevMoves.yellow + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Yellow player moved ${moves.yellow + 1} times`]
        })
    }

    return(
        <div className="Ludo">
            <h1>GAME Start now!</h1><br />
            <br />
            <button style={{backgroundColor: "blue", width: "100px", height: "50px", margin: "5px", border: "1px solid black", borderRadius: "5px", hover: {backgroundColor: "lightblue", cursor: "pointer"}}} onClick={updateBlue}>Blue Player</button>
            <button style={{backgroundColor: "red", width: "100px", height: "50px", margin: "5px", border: "1px solid black", borderRadius: "5px", hover: {backgroundColor: "lightcoral", cursor: "pointer"}}} onClick={updateRed}>Red Player</button>
            <button style={{backgroundColor: "green", width: "100px", height: "50px", margin: "5px", border: "1px solid black", borderRadius: "5px", hover: {backgroundColor: "lightgreen", cursor: "pointer"}}} onClick={updateGreen}>Green Player</button>
            <button style={{backgroundColor: "yellow", width: "100px", height: "50px", margin: "5px", border: "1px solid black", borderRadius: "5px", hover: {backgroundColor: "lightyellow", cursor: "pointer"}}} onClick={updateYellow}>Yellow Player</button>
            <br/>
            <h2>Moves History</h2>
            <ul>
                {arr.map((move, index)=>{
                    return <li key={index}>{move}</li>
                })}
            </ul>
        </div>
    )
}