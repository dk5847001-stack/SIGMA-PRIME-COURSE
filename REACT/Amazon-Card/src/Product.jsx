import Description from "./Description"
import Price from "./Price"
import "./Product.css"
export default function Product() {
    return (
        <div className="Product">
            <div className="Description">
                <Description title="Laptop adge 60" Description="This is the unique lapto for study in all of the field." />
            </div>
            <div className="Price">
                <Price oldPrice={1200} newPrice={999}/>
            </div>
        </div>
    )
}