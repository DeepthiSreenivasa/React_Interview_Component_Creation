import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./userContext";

const Login = () => {
  const username = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const context = useContext(UserContext);

  function loginUser() {
    console.log("UserName::", username.current);

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.current,
        password: password.current,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((data) => {
        context.setUserName(data.firstName);
        navigate("/Dashboard");
      })
      .catch((err) => console.log("Error::", err));
  }

  return (
    <>
      <label>User Name</label>
      <input
        type="text"
        onChange={(event) => (username.current = event.target.value)}
      />
      <label>Password</label>
      <input
        type="text"
        onChange={(event) => (password.current = event.target.value)}
      />
      <button onClick={loginUser}>Submit</button>
    </>
  );
};

export default Login;
