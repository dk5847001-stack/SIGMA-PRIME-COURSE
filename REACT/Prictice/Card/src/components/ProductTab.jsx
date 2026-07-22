import Product from "./Product"
import "../css/ProductTab.css"
export default function ProductTab(){
    return(
        <div className="ProductTab">
            <Product Title="Laptop edge 30" description="This is the letest version of the Dell." oldPrice={60000} newPrice={40000} />
            <Product Title="Nothing phone 3a" description="Nothing phone 3a is the latest model." oldPrice={10000} newPrice={90000} />
            <Product Title="iphone 30pro max" description="The latest model of the iphone." oldPrice={910000} newPrice={70000} />
            <Product Title="Samsung Galaxy S23" description="This is the latest version of the Samsung S23." oldPrice={120000} newPrice={140000} />
            <Product Title="Oneplus 12" description="This is the latest version of the Oneplus 12." oldPrice={80000} newPrice={60000} />
            <Product Title="Redmi Note 13" description="This is the latest version of the Redmi 13." oldPrice={20000} newPrice={15000} />
            <Product Title="Realme 13" description="This is the latest version of the Realme 13." oldPrice={30000} newPrice={25000} />
            <Product Title="Oppo Reno 13" description="This is the latest version of the Oppo Reno 13." oldPrice={40000} newPrice={35000} />
            <Product Title="Vivo V30" description="This is the latest version of the Vivo V30." oldPrice={50000} newPrice={45000} />
        </div>
    )
}