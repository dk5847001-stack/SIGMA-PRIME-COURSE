import { useState } from "react";
export default function Counter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount((prevCount)=>{
            return prevCount + 1;
        })
    };
    function decrement(){
        setCount(count-1);
    };
    function Reset(){
        setCount(0);
    }
    return(
        <div className="Counter">
            <h2>Counter</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>Decrment</button>
            <button onClick={Reset}>Reset</button>
            <br />
            <p>Count : {count}</p>
        </div>
    )
}