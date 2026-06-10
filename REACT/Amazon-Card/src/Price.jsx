export default function Price({oldPrice, newPrice}){
    return (
        <>
    <p><del>INR {oldPrice}</del> &nbsp; <span>INR {newPrice}</span></p>
        </>
    )
}