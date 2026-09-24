import Dashboard from "./Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import App from "./App";
import Admin from "./Admin";
import ProtectedRoute from "./ProtectedRoute";
import RoleProtectedRoute from "./RoleProtectedRoute";

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
        element: <ProtectedRoute />,
        children: [
          {
            path: "Dashboard",
            element: <Dashboard />,
          },
          {
            path: "Users",
            element: <Users />,
          },
          {
            element: (
              <RoleProtectedRoute allowedRoles={["admin"]}></RoleProtectedRoute>
            ),
            children: [
              {
                path: "Admin",
                element: <Admin />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default Routes;
