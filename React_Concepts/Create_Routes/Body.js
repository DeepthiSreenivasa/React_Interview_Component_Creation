import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

const Body = () => {
  const appRouters = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    { path: "/products", element: <Product /> },
  ]);

  return <RouterProvider router={appRouters}></RouterProvider>;
};

export default Body;
