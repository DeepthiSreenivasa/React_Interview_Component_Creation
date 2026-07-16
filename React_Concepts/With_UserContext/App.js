import "./styles.css";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import UserDetailsContext from "./UserDetailsContext";
//import Error from "./Error";

export default function App() {
  const [userFirstName, setUserFirstName] = useState("Deepthi");
  const appRoutes = createBrowserRouter([
    {
      index: true, //Mistake : you forgot what happens when empty route is given
      // You have to add index, create Navigate element and also you
      //have to create another path and element pair like below
      element: <Navigate to="Home" replace />,
    },
    {
      path: "Login",
      element: <Login></Login>,
    },
    {
      path: "Home",
      //Mistake you should use capital letter for Provider

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

  return (
    <UserDetailsContext.Provider //Mistake this should be capital P in provider
      value={{ //Mistake : you forgot the keyword value as its props so basically the key for this prop is just "value"
        userFirstName: userFirstName,
        setUserFirstName: (name) => setUserFirstName(name), //Mistake you have to call the setter function again from Login page
      }}
    >
      <RouterProvider router={appRoutes}></RouterProvider>
    </UserDetailsContext.Provider>
  );
}
