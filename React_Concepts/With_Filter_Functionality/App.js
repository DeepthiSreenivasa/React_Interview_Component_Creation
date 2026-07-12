import "./styles.css";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Error from "./Error";

export default function App() {
  const appRoutes = createBrowserRouter([
    {
      errorElement: <Error />, //Mistake : you forgot the keyname "errorElement" also it is jus a single key value pair
      children: [
        {
          index: true, //Mistake : you forgot what happens when empty route is given
          //You have to add index, create Navigate element and also you
          // have to create another path and element pair like below
          element: <Navigate to="Home" replace />,
        },
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
      ],
    },
  ]);

  return <RouterProvider router={appRoutes}></RouterProvider>;
}
