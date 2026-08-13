import LotteryGame from "../components/LotteryGame"
import TicketNum from "../components/TicketNum"
import Ticket from "../components/Ticket"
import { sum } from "../helper/helper"
export default function Lottery(){
    let winCondition = (ticket) =>{
        return ticket[0] ===0;
    }
    return(
        <div className="Lottery">
            <h2>Welcome to Lottery Game</h2><br />\
            <LotteryGame n={4} winCondition={winCondition}/>
        </div>
    )
}