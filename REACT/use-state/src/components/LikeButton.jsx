import { useState } from "react";

export default function LikeButton() {
    let [isLike, setIsLike] = useState(false);
    let [count, setCount] = useState(0);
    console.log("components was rerendered!")
    let toggleLike = () => {
        setIsLike(!isLike);
        setCount((currCount)=>{
            return currCount = 34; 
        });
        setCount((currCount)=>{
            return currCount = 34; 
        });
        console.log("we are going to toggle!")
    };
    let LikeStyle = {color : 'red'}
    let costumStyle = {fontSize : "3rem", cursor : "pointer"}
    return (
        <>
            <h1>Use State in React</h1>
            <p style={costumStyle}>count : {count}</p>
            <p onClick={toggleLike}>
                {
                    !isLike ? (
                        <i style={costumStyle} className="fa-regular fa-thumbs-up"></i>)
                        : (
                            <i style={LikeStyle,costumStyle} className="fa-solid fa-thumbs-up"></i>
                        )
                }
            </p>
        </>
    )
}