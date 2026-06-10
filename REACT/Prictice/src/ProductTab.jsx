import Product from "./Product";

function ProductTab(){
    return(
        <div>
            <Product title="Laptop" price={3000}/>
            <Product title="Phone" price={1500}/>
            <Product title="Watch" price={10400}/>
            <Product title="Table" price={1003400}/>
            <Product title="Chair" price={43000}/>
            <Product title="Jug" price={104500}/>
        </div>
    )
}

export default ProductTab;