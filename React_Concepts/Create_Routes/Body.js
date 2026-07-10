import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; /***** MISTAKE react router dom has to be installed */
import Home from "./Home";
import Product from "./Product";

const Body = () => {
  {
    /***** MISTAKE CreateBrowserRoute has to be imported from react-router-dom*/
  }
  const appRouters = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    { path: "/products", element: <Product /> },
  ]);

  return <RouterProvider router={appRouters}></RouterProvider>;
  {
    /**** MISTAKE RouterProvider has to be  returned and it will accept a gear caled router*/
  }
};

export default Body;
