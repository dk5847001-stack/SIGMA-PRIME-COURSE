import "./Price.css"
export default function Price({oldPrice, newPrice}){
    return(
        <>
        <p><del>{oldPrice}</del> &nbsp; <b>{newPrice}✓</b></p>
        </>
    )
}