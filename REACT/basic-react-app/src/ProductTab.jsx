import { useState } from "react";
import Product from "./Product";
import "./ProductTab.css";

function ProductTab() {
    const [message, setMessage] = useState("Button not clicked");

    function handleClick() {
        setMessage("Button clicked successfully!");
    }

    // let options1 = ["hi-tech", "durable", "fast"];
    // let options2 = { a: "abc", b: "def" };

    return (
        <div className="container mt-3 ProductTab">
            <button
                className="btn btn-outline-success"
                onClick={handleClick}
            >
                Submit
            </button>

            <p className="mt-3">{message}</p>

            <Product
                title="phone"
                features={["hi-Tech", "Durableable", "fast", "premium", "populor"]}
                features2={{a: "upgrade version", b: "frequently used"}}
            />

            <Product
                title="tablet"
                price={50000}
            />

            <Product
                title="laptop"
                price={80000}
            />
        </div>
    );
}

export default ProductTab;