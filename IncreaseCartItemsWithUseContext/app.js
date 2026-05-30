import Products from './Products';
import Header from './Header';
import CartContext from './CartContext';
import { useState } from 'react';

export default function App() {

  const [quantity, setQuantity] = useState(0);

  return (<>
    <CartContext.Provider value={{quantity,setQuantity}}>
      <Header></Header>
      <Products></Products>
    </CartContext.Provider>
  </>)
}
