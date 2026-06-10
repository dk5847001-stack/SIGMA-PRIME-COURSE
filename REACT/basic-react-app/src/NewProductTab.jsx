import NewProduct from "./NewProduct";
import "./NewProductTab.css";

function NewProductTab() {
    return (
        <div className="container mt-4">
            <div className="row g-3">
                <div className="col-12 col-md-6 col-lg-3">
                    <NewProduct
                        title="Laptop Edge A3"
                        idx={0}
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aspernatur repudiandae ab beatae nulla nobis!"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <NewProduct
                        title="Samsung Edge A3"
                        idx={1}
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aspernatur repudiandae ab beatae nulla nobis!"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <NewProduct
                        title="iPhone 17 Pro Max Edge A3"
                        idx={2}
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aspernatur repudiandae ab beatae nulla nobis!"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <NewProduct
                        title="Nothing Phone 3a"
                        idx={3}
                        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aspernatur repudiandae ab beatae nulla nobis!"
                    />
                </div>
            </div>
        </div>
    );
}

export default NewProductTab;