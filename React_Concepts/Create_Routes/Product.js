import { Link } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";

const Product = () => {
  const products = [
    { productName: "Phone", id: 1 },
    { productName: "Book", id: 2 },
    { productName: "Pen", id: 3 },
  ];

  return (
    <>
      <h1>This Product Page</h1>

      {products.map((item) => (
        <div>
          <Link to={`/productDetail/${item.id}`}>{item.productName}</Link>
          {/**MISTAKE - Without leading '/' the page might route considering "product/productDetail" */}
        </div>
      ))}
    </>
  );
};

export default Product;
