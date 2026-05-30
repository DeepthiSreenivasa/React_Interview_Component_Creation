import { createContext } from 'react';
// CartContext.js

const CartContext = createContext({
    quantity: 0,
    setQuantity: () => { }
})

export default CartContext;
