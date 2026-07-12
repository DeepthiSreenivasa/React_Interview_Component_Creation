import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const param = useParams();
  const [productDetail, setProductDetail] = useState({}); //Mistake initial State was set to {}
  const productURL = "https://dummyjson.com/products";

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    let url = productURL + "/" + param.id;
    let data = await fetch(url);
    let dataFromApi = await data.json();
    console.log("dataFromApi::", dataFromApi);
    setProductDetail(dataFromApi);
  };

  return productDetail ? (
    <>
      <h1>ProductDetailPage</h1>
      <div>{productDetail?.id}</div>
      <div>{productDetail?.title}</div>
      <div>{productDetail?.description}</div>
    </>
  ) : (
    <>
      <h1>No Products Found</h1> {/***Mistake h1 was not closed properly */}
    </>
  );
};

export default ProductDetail;
