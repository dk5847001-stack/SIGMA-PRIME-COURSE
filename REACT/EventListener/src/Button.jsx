function printHello(){
    return console.log("Hello!")
}
function printBy(){
    return console.log("By!")
}
function printDoubleClick(){
    return console.log("you are double clicking me");
}
export default function Button(){
    return(
        <>
        <div className="button">
        <button onClick={printHello}>click me!</button>
        <p onMouseOver={printBy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit, cumque, excepturi quasi eum architecto, iure perspiciatis necessitatibus eaque praesentium provident cum laudantium quia voluptatum fuga quos temporibus nihil! Veniam?</p>
        <button onDoubleClick={printDoubleClick}>Double click me</button>
        </div>
        </>
    )
}