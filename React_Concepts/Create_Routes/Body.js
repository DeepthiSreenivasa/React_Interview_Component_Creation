import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"; /***** MISTAKE react router dom has to be installed */
import Home from "./Home";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Error from "./Error";

const Body = () => {
  {
    /***** MISTAKE CreateBrowserRoute has to be imported from react-router-dom*/
  }
  const appRouters = createBrowserRouter([
    {
      errorElement: <Error />, //Use errorElement as the key and value will be the Error element
      children: [
        //Mistake you have to place the entire objects insdie an array names childres
        {
          path: "/",
          element: (
            <Navigate to="/home" replace />
          ) /*** To redirect Navigation to home when the path is fully empty */,
        },
        {
          path: "/home",
          element: <Home />,
        },
        { path: "/products", element: <Product /> },
        {
          path: "/ProductDetail/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouters}></RouterProvider>;
  {
    /**** MISTAKE RouterProvider has to be  returned and it will accept a gear caled router*/
  }
};

export default Body;
