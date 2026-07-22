import Price from "./Price"
import Description from "./Description"
import "../css/Product.css"
export default function Product({Title, description, oldPrice, newPrice}){
    return(
        <div className="Product">
            <div className="Description">
                <Description Title={Title} Description={description}  />
            </div>
            <div className="Price">
                <Price oldPrice={oldPrice} newPrice={newPrice} />
            </div>
        </div>
    )
}