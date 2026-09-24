import { useSelector, useDispatch } from "react-redux";
import React from "react";

const Cart = React.memo(() => {
  const cart = useSelector((store) => store.cart);

  const cartItems = Object.values(cart);

  const totalPrice = cartItems
    .flat()
    .reduce((sum, item) => sum + item.price, 0);

  const data = Object.values(cart).map((item) => {
    return { product: item[0], quantity: item.length };
  });

  return (
    <>
      {data.map((item) => (
        <div>
          {item.product.name} - {item.quantity} * {item.product.price} ={" "}
          {item.quantity * item.product.price}
        </div>
      ))}
      <h1>{totalPrice}</h1>
    </>
  );
});

export default Cart;
