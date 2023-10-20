import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const BandProducts = () => {
    const bandProducts = useLoaderData();
    
    console.log(bandProducts);
    return (
       <div>
        <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 py-20">
            {
                bandProducts.map(product => <ProductsCard product={product} key={product.id}></ProductsCard>)

            }
        </div>
        </div>
       </div>
    );
};

export default BandProducts;