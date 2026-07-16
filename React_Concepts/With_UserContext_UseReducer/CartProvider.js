import { useReducer } from "react";
import CartQReducer from "./CartQReducer";
import CartQContext from "./CartQContext";

const initialState = {
  quantity: 0,
};

console.log("CartReducer =", CartQReducer); //You use the created reducer inside this Provider File
const CartProvider = ({ children }) => {
  console.log("CartProvider Rendered");
  const [state, dispatch] = useReducer(CartQReducer, initialState);

  return (
    <CartQContext.Provider value={{ quantity: state.quantity, dispatch }}>
      {children}
    </CartQContext.Provider>
  );
};
export default CartProvider;
