import "./Counter.css";
import { useEffect, useState } from "react";
export default function Counter(){
    const [countx, setCountx] = useState(0);
    const [county, setCounty] = useState(0);

    let increaseCountx = ()=>{
        setCountx((currentCount)=>{
            return currentCount+1;
        })
    }
    let increaseCounty = ()=>{
        setCounty((currentCount)=>{
            return currentCount+1;
        })
    }

    useEffect(function printSomething(){
        console.log("This is side effect!")
    }, [countx])
    return(
        <div className="Counter">
            <h2>Hello🙋‍♀️, welcome to Counter page.</h2><hr /><br />
            <button onClick={increaseCountx}>+1</button>
            <p>Count = {countx}</p><br />
            <button onClick={increaseCounty}>+1</button>
            <p>Count = {county}</p><br />
        </div>
    )
}