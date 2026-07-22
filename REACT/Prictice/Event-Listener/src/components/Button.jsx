import { useState } from "react";
export default function Button() {
    const [count, setCount] = useState(0);
    function printHello() {
        setCount(count + 1);
        console.log("Hello, world!");
        const helloElement = document.getElementById("hello");
        helloElement.textContent = helloElement.textContent + `[${count}] ` + "Hello ";
    }
    return (
        <div className="Button">
            <button onClick={printHello}>Click me!</button>
            <h2 id="hello"></h2>
        </div>
        
    )
}