import "./Lottery.css";
import { useState } from "react";

export default function Lottery() {
    const [RandumNum, setRandumNum] = useState({ number: "", isGenerated: false, isWinner: false });

    let newTicket = () => {
        setRandumNum({
            number: Math.floor(Math.random() * 1000) + 1,
            isGenerated: true
        })
    }

    let digitSum = (number) => {
        let sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        return sum;
    }


    let bgClr = {backgroundColor: "green", color: "#fff"}
    

    return (
        <div className="Lottery">
            <h2>Lottery Ticket</h2>
            <div className="btn">
                <button style={{backgroundColor: digitSum(RandumNum.number)==15 ? "green" : "transparent"}} onClick={newTicket}>Get a Lottery Ticket</button>
            </div>
            <div style={{backgroundColor: digitSum(RandumNum.number) == 15 ? "red" : "transparent"}} className="box">
                {
                    digitSum(RandumNum.number) == 15 ? <h4>Lottery Ticket = <b>{RandumNum.number}</b><br /><button style={bgClr}>Congratulations you won the lottery😍😍</button><br /><p>sum of digits : {digitSum(RandumNum.number)}</p></h4>
                        : (RandumNum.isGenerated ? <h4>Lottery Ticket = <b>{RandumNum.number}</b><br /><button onClick={newTicket}>Get New Ticket</button> <p>sum of digits : {digitSum(RandumNum.number)}</p></h4> : "you have not a Lottery Ticket yet!🥱")

                }
                {
                    RandumNum.isGenerated ? <span style={{color: digitSum(RandumNum.number) == 15 ? "yellow" : "rgb(190, 4, 4)"}}>Note : if number of digits are 15, you won!</span> : ""
                }
                
            </div>
        </div>
    )
}