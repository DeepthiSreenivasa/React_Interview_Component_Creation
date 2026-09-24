import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "./CartSlice";

const Product = () => {
  const products = [
    { id: 1, name: "iPhone", price: 80000 },
    { id: 2, name: "Laptop", price: 120000 },
    { id: 3, name: "Headphones", price: 5000 },
  ];

  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  function addProductsToCart(item) {
    console.log(cartItem);

    dispatch(addItem(item));
  }

  function removeProductsFromCart() {}

  return (
    <>
      {products.map((item, index) => (
        <>
          <div>{item.name}</div>
          <button onClick={() => addProductsToCart(item)}>+</button>
          {cart[item.id].length}
          <button onClick={() => removeProductsFromCart(item)}>-</button>
        </>
      ))}
      <Cart></Cart>
    </>
  );
};

export default Product;
