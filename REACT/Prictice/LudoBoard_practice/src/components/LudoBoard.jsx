import { useState } from "react"
import "./LudoBoard.css";

export default function LudoBoard(){
    const[Moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    const[Arr, setArr] = useState("No moves yet!");

    let updateBlue = (prevMoves)=>{
        setMoves((prevMoves)=>{
            return{
                ...prevMoves, blue: prevMoves.blue + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Blue move ${Moves.blue + 1}`]
        })
    }

    let updateYellow = (prevMoves)=>{
        setMoves((prevMoves)=>{
            return{
                ...prevMoves, yellow : prevMoves.yellow + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Yellow Move ${Moves.yellow + 1}`]
        })
    }

    let updateGreen = (prevMoves)=>{
        setMoves((prevMoves)=>{
            return{
                ...prevMoves, green : prevMoves.green + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Green Move ${Moves.green + 1}`]
        })
    }

    let updateRed = (prevMoves)=>{
        setMoves((prevMoves)=>{
            return{
                ...prevMoves, red : prevMoves.red + 1
            }
        })
        setArr((prevArr)=>{
            return [...prevArr, `Red Move ${Moves.red + 1}`]
        })
    }

    return(
        <div className="LudoBoard">
            <h2>Game Begins!</h2>
            <span><button style={{backgroundColor: "blue", padding: "10px 30px", margin: "5px", border: "1px solid black", borderRadius: "9px", cursor: "pointer"}} onClick={updateBlue}>blue +1</button> &nbsp; Blue Moves = {Moves.blue}</span><br />
            <span><button style={{backgroundColor: "yellow", padding: "10px 30px", margin: "5px", border: "1px solid black", borderRadius: "9px", cursor: "pointer"}} onClick={updateYellow}>blue +1</button> &nbsp; Yellow Moves = {Moves.yellow}</span><br />
            <span><button style={{backgroundColor: "green", padding: "10px 30px", margin: "5px", border: "1px solid black", borderRadius: "9px", cursor: "pointer"}} onClick={updateGreen}>blue +1</button> &nbsp; Green Moves = {Moves.green}</span><br />
            <span><button style={{backgroundColor: "red", padding: "10px 30px", margin: "5px", border: "1px solid black", borderRadius: "9px", cursor: "pointer"}} onClick={updateRed}>blue +1</button> &nbsp; Red Moves = {Moves.red}</span>
            
        </div>
    )
}