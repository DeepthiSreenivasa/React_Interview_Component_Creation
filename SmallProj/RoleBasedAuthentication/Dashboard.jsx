import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "./userContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userDetails } = useContext(UserContext);

  return (
    <>
      <div>
        Welcome {userDetails.name} Age - {userDetails.age} Email -
        {userDetails.email} Role - {userDetails.role}
      </div>
      <div>{<Link to="/Users">Get Other Users List</Link>}</div>
    </>
  );
};

export default Dashboard;
