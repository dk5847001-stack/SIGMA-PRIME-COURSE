import { useState } from "react";
import "./LikeButton.css";

export default function LikeButton(){
    const [isLike, setIsLike] = useState(false);

    let toggleLike = ()=>{
        setIsLike(!isLike);
    }

    
    
    let style1 = {backgroundColor : "green", color : "#fff", fontWeight : "bolder", cursor: "pointer", padding : "10px 25px", margin : "5px", boxShadow : "inset 0 0 10px rgba(0, 0, 0, 0.742)", borderRadius : "8px", border : "1px solid black"}
    let style2 = {backgroundColor : "blue", color : "#fff", fontWeight : "bolder", cursor: "pointer", padding : "10px 25px", margin : "5px", boxShadow : "inset 0 0 10px rgba(0, 0, 0, 0.742)", borderRadius : "8px", border : "1px solid black"}
    return(
        <div className="LikeButton">
            <p onClick={toggleLike}>
                {
                    !isLike ? ( <button style={style2}>Like</button> ) : (<button style={style1}>Liked</button>)
                }
            </p>
        </div>
    )
}