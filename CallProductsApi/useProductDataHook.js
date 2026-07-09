import { useEffect, useState } from 'react';

const productUrl = "https://dummyjson.com/products";

const useProductDataHook = () => {

  [products,setProducts] = useState([]);

  useEffect(() => {

    const fecthData = async() =>  {
      setProducts(await getProducts());
    }
    fecthData();
  }, [])

  const getProducts = async () => {

    let productData = await fetch(productUrl);
    return await productData.json();
   
  }
   
  return products;

}

export default useProductDataHook;
