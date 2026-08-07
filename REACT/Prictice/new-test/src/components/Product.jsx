import Price from "./Price";
import Description from "./Description";
import './Product.css';
export default function Product({Title, description, oldPrice, newPrice}){
    return(
        <div className="Product">
        <Description Title={Title} Description={description} />
        <Price oldPrice={oldPrice} newPrice={newPrice} />
        </div>
    )
}