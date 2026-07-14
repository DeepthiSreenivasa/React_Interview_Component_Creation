import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartQContext from "./CartQContext";

const ProductDetails = () => {
  const param = useParams();
  const navigate = useNavigate();
  const productDetailUrl = "https://dummyjson.com/products/";
  const [productDetail, setProductDetail] = useState({});
  //const [quantity, setQuantity] = useState(0);
  const { quantity, dispatch } = useContext(CartQContext);

  useEffect(() => {
    getProductDetails();
  }, []);

  console.log("dispatch =", dispatch);

  const getProductDetails = async () => {
    let data = await fetch(productDetailUrl + param.id);
    let productDetail = await data.json();
    setProductDetail(productDetail);
  };

  const updateQuantity = (str) => {
    if (str === "add") {
      console.log("Dispatching...");
      //  newQuantity = quantity + 1;
      dispatch({ type: "ADD_ITEMS" });
    } else {
      //newQuantity = quantity - 1;
      dispatch({ type: "REMOVE_ITEMS" });
    }
    //setQuantity(quantity);
  };

  const navigateToCart = () => {
    navigate("/Cart");
  };

  return (
    <>
      <h1>This is Product Details Page </h1>
      <div>{productDetail?.description}</div>
      <img src={productDetail?.images?.[0]} width="500px" height="400px" />
      <button
        onClick={() => {
          updateQuantity("add");
        }}
      >
        Add Items
      </button>
      <div>{quantity}</div>
      <button
        onClick={(remove) => {
          updateQuantity("remove");
        }}
      >
        Remove Items
      </button>
      <button
        onClick={() => {
          navigateToCart();
        }}
      >
        View Cart
      </button>
    </>
  );
};

export default ProductDetails;
