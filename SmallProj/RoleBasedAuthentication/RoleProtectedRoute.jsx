import UserContext from "./userContext";
import Login from "./Login";
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const RoleProtectedRoute = ({ allowedRoles }) => {
  const { userDetails } = useContext(UserContext);

  console.log("userDetails.role::", userDetails.role);
  console.log("allowedRoles::", allowedRoles);
  if (!allowedRoles.includes(userDetails.role)) {
    return <Navigate to="/Dashboard" replace />;
  }

  return <Outlet></Outlet>;
};

export default RoleProtectedRoute;
