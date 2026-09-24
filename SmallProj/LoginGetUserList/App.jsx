import "./styles.css";
import Login from "./Login";
import { Outlet } from "react-router-dom";
import UserContext from "./userContext";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Default UserName");
  console.log("UserContext::", UserContext);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          userName: name,
          setUserName: (name) => {
            return setName(name);
          },
        }}
      >
        <Outlet></Outlet>
      </UserContext.Provider>
    </div>
  );
}
