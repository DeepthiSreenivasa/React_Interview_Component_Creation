import "./styles.css";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import CartProvider from "./CartProvider";

export default function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const appRoutes = createBrowserRouter([
    {
      path: "Home",
      element: <Home></Home>,
    },
    {
      path: "Products",
      element: <Products></Products>,
    },
    {
      path: "ProductDetails/:id",
      element: <ProductDetails></ProductDetails>,
    },
    {
      path: "Cart",
      element: <Cart></Cart>,
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={appRoutes}></RouterProvider>
    </CartProvider>
  );
}
