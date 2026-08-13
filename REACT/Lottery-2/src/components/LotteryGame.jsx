import { useState } from "react";
import "./Lottery.css";
import {genTicket, sum} from "../helper/helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function LotteryGame({n=3, winCondition}){
    const[ticket, setTicket] = useState(genTicket(n))
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }
    return(
        <div className="Lottry">
            <h2>Lottery Game</h2><br />
            <Button action={buyTicket}/>
            <Ticket ticket={ticket}/>
            <p>sum of digits : {sum(ticket)}</p><br />
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}