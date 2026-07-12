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

  {
    return productDetails?.products?.length ? (
      <>
        <h1>This is Product Page</h1>

        {productDetails.products.map((item) => (
          <Link to={`/ProductDetail/${item.id}`}>
            {item.title}
          </Link> /**backtick was not used properly */
        ))}
      </>
    ) : (
      <h1>No Data Found</h1>
    );
  }
};

export default Product;
