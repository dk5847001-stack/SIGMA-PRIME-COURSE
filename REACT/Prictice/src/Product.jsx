import "./Product.css";

function Product({ title, price}) {
  let isDiscount = price > 10000;
let styles = {backgroundColor : isDiscount ? "black" : "red"}
  return (
    <div className="Product" style={styles}>
      <h2>{title}</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        reprehenderit recusandae labore distinctio temporibus omnis deleniti
        maiores totam numquam ex voluptates id debitis exercitationem, hic
        suscipit sequi? Ea, unde officia.
      </p>
      <p>INR {price}</p>
      {isDiscount && <p style={{color:"green"}}>Discount of 5%</p>}
    </div>
  );
}

export default Product;