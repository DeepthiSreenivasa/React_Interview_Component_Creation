import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"; /***** MISTAKE react router dom has to be installed */
import Home from "./Home";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Error from "./Error";
import App from "./App";

const Body = () => {
  {
    /***** MISTAKE CreateBrowserRoute has to be imported from react-router-dom*/
  }
  const appRouters = createBrowserRouter([
    {
      path: "/",
      element: <App />, //Mistake Added element App here as parent to fix router-outlet
      //Mistakke Use errorElement as the key and value will be the Error element
      errorElement: <Error />,    
      ///Mistake : you forgot the keyname "errorElement" also it is jus a single key value pair
      children: [
        //Mistake you have to place the entire objects insdie an array names childres
        {
          index: true,
          //Mistake : you forgot what happens when empty route is given
          //You have to add index, create Navigate element and also you
          // have to create another path and element pair like below
          element: (
            <Navigate to="home" replace />
          ) /*** To redirect Navigation to home when the path is fully empty */,
        },
        {
          path: "home",
          element: <Home />,
        },
        { path: "products", element: <Product /> },
        {
          path: "ProductDetail/:id",
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
