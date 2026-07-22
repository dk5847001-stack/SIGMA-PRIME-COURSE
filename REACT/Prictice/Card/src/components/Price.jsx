import "../css/Price.css";
export default function Price({oldPrice, newPrice}){
    return(
        <div className="Price">
            <span>INR<del>{oldPrice} </del> &nbsp; <b>INR {newPrice}</b></span>
        </div>
    )
}