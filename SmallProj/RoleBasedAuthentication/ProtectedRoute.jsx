import UserContext from "./userContext";
import Login from "./Login";
import { useContext } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userDetails } = useContext(UserContext);
  const navigate = useNavigate();

  if (userDetails.name == "Default Name") {
    console.log("Logged In User::", userDetails.name);
    return <Navigate to="/Login" replace />;
  }
  return <Outlet></Outlet>;
};

export default ProtectedRoute;
