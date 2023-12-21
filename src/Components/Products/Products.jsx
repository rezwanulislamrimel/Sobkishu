import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
    const {products}=useLoaderData()
    console.log(products);


    return (
        <div className='grid grid-cols-3 gap-3 p-5'>
            {
               products.map(Product=><ProductCard key={Product.id} Product={Product}></ProductCard>)
            }
        </div>
    );
};

export default Products;