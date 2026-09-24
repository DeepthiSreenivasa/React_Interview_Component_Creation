import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "./userContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);

  return (
    <>
      {console.log("userName::", context)}
      <div>Welcome {context.userName}</div>
      <div>{<Link to="/Users">Get Other Users List</Link>}</div>
    </>
  );
};

export default Dashboard;
