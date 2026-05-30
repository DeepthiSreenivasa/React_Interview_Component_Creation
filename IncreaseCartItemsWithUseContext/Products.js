import { useEffect, useState } from 'react';
import ProductCards from './ProductCards'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsList();
    }, [])


    function getProductsList() {
        fetch("https://fakestoreapi.com/products/").then((res) => res.json()).then((data) => {
            setProducts(data)
        })
    }

    return <>
        {products.map(item => <ProductCards productDetails={item}  ></ProductCards>)}
    </>


}

export default Products;
