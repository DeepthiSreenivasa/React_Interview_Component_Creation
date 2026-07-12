import "./styles.css";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const appRoutes = createBrowserRouter([
    //Mistake : It is createBrowserRouter not createBrowserRouters
    {
      path: "Home",
      element: <Home></Home>,
    },
    {
      path: "Product",
      element: <Product></Product>,
    },
    {
      path: "ProductDetail/:id",
      element: <ProductDetail></ProductDetail>,
    },
  ]);

  return <RouterProvider router={appRoutes}></RouterProvider>;
}
