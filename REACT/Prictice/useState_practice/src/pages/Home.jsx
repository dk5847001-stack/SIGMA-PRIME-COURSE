import Counter from "../components/Counter";
import LikeButton from "../components/LikeButton";
import "./Home.css";
export default function Home(){
    return(
        <div className="home">
        <h1>Hello, welcome to home pages.</h1><br />
        <Counter /> <br />
        <LikeButton />
        </div>
    )
}