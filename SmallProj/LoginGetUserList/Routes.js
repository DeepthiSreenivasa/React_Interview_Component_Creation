import Dashboard from "./Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import App from "./App";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Users",
        element: <Users />,
      },
    ],
  },
]);

export default Routes;
