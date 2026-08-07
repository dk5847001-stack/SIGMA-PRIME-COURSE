import "./Button.css";
function printHello() {
    console.log("Hello");
    {
        let button = document.querySelector(".btn");

        if (button.innerHTML === "Click me!") {
            button.innerHTML = "You clicked!";
            button.style.color = "greenyellow";
            alert("you clicked the button!")
        } else {
            button.innerHTML = "Click me!";
            button.style.color = "#fff";
            confirm("Are you sure!")
        }

    }
}

export default function Button() {
    return (
        <div className="Button">
            <button className="btn" onClick={printHello}>Click me!</button>
        </div>
    )
}