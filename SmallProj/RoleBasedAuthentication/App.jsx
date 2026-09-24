import "./styles.css";
import Login from "./Login";
import { Outlet } from "react-router-dom";
import UserContext from "./userContext";
import { useState } from "react";

export default function App() {
  const [personDetails, setPersonDetails] = useState({
    name: "Default Name",
    age: 30,
    email: "personDetails.email",
    role: "Default Role",
  });
  const [name, setName] = useState("Default UserName");
  console.log("UserContext::", UserContext);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          userDetails: {
            name: personDetails.name,
            age: personDetails.age,
            email: personDetails.email,
            role: personDetails.role,
          },
          setUserDetails: (details) => {
            return setPersonDetails({
              name: details.name,
              age: details.age,
              email: details.email,
              role: details.role,
            });
          },
        }}
      >
        <Outlet></Outlet>
      </UserContext.Provider>
    </div>
  );
}
