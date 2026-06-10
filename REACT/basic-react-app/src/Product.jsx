import "./Product.css";

function Product({ title, price = 100, features = [], features2 = {} }) {
    const extraFeatures = [features2.a, features2.b].filter(Boolean);
    let isDiscount = price > 30000;
    let styles = {backgroundColor: isDiscount && "yellow", color: "black"}

    return (
        <div className="mt-3 mb-3 p-3 Product " style={styles}>
            <h2>{title}</h2>

            <h5>Price: ₹{price}</h5>

            <div>
                <p>Features:</p>

                {features.length > 0 ? (
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No features available</p>
                )}
            </div>
            {isDiscount ? <p> <hr /> Discount of 5%</p> : null}

            <p>
                Features2:{" "}
                {extraFeatures.length > 0
                    ? extraFeatures.join(", ")
                    : "No extra features available!"}
            </p>
        </div>
    );
}

export default Product;