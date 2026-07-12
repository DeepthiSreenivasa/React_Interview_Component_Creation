import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
  const [productDetails, setProductDetails] = useState([]);
  const productURL = "https://dummyjson.com/products";

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log("Into getProductDetails::");
    let data = await fetch(productURL);
    dataFromApi = await data.json();
    console.log("dataFromApi::", dataFromApi);

    setProductDetails(dataFromApi);
    console.log("productDetails::", productDetails);
  };

  const filterData = () => {
    let filteredItems = productDetails?.products.filter(
      (item) => item.rating > 4
    );
    console.log(filteredItems);
    setProductDetails({ ...productDetails, products: filteredItems }); //Mistake you have to send only products to the template so you have to speread the array inside an object and then add another key products and then assign filteredItems
  };

  const reset = () => {
    getProductDetails();
  };

  {
    return productDetails?.products?.length ? (
      <>
        <h1>This is Product Page</h1>
        <button
          onClick={() => {
            //Mistake : React uses onClick not jus click also u missed usingcamel case
            filterData();
          }}
        >
          Rating Greater than 4
        </button>
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
        <ul>
          {productDetails.products.map((item) => (
            <li>
              <Link to={`/ProductDetail/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <h1>No Data Found</h1>
    );
  }
};

export default Product;
