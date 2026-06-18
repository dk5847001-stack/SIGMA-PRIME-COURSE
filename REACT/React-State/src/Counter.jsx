import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);
    function inCount(){
        setCount(count+1)
        console.log(count);
    }
    return (
        <>
        <h2>count = {count}</h2>
        <button onClick={inCount}>increase count</button>
        </>
    )
}