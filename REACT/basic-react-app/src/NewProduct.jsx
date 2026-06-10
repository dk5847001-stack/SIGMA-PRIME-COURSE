import "./NewProduct.css";
import Price from "./Price";

function NewProduct({ title, description, idx }) {
    let oldPrice = ["1414", "5252", "9698", "97633"];
    let newPrice = ["1412", "9797", "8878", "9790"];

    return (
        <div className="NewProduct p-2 m-2">
            <h3>{title}</h3>
            <p>{description}</p>

            <Price
                oldPrice={oldPrice[idx]}
                newPrice={newPrice[idx]}
            />
        </div>
    );
}

export default NewProduct;