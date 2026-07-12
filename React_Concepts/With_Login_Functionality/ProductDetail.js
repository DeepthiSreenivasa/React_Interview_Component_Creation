import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const param = useParams();
  const [productDetail, setProductDetail] = useState({}); //Mistake initial State was set to {}
  const [quantity, setQuantity] = useState(0);
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

  const incQuantity = () => {
    setQuantity((prev) => prev + 1); //Mistake you can never mutate react variables directly
    //either you can do it by increasing the quantity as quantity + 1 or
    //setQuantity((prev)=>prev+1) never as quantity++;
  };

  const decQunatity = () => {
    setQuantity((prev) => prev - 1);
  };

  const addToCart = () => {
    ////Misatke : You need to know the fetch second param when you make a post request
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      header: { "Content-type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [
          {
            id: param.id,
            quantity: quantity,
          },
        ],
      }),
    }).then((res) => res.json().then(console.log(res)));
  };

  return productDetail ? (
    <>
      <h1>ProductDetailPage</h1>
      <div>{productDetail?.id}</div>
      <div>{productDetail?.title}</div>
      <div>{productDetail?.description}</div>
      <div>
        <img src={productDetail?.images?.[0]} width="200px" height="200px" />{" "}
        {/**Mistakkke missed to give '?' after images */}
      </div>
      <p>Select Number of Items</p>
      <button
        onClick={() => {
          incQuantity();
        }}
      >
        +
      </button>
      {" " + quantity + " "}
      <button
        onClick={() => {
          decQunatity();
        }}
      >
        -
      </button>
      <br />
      <button onClick={addToCart}>Add to Cart</button>
    </>
  ) : (
    <>
      <h1>No Products Found</h1> {/***Mistake h1 was not closed properly */}
    </>
  );
};

export default ProductDetail;
