import "./Home.css";
import Lottery from "../components/Lottery";
export default function Home(){
    return(
        <div className="Home">
            <h1>Hello, welcome to <span>Lottery Game.</span></h1><br /><br />
            <Lottery />
        </div>
    )
}