import { createContext } from "react";

const UserContext = createContext({
  userDetails: { name: "", age: "", email: "", role: "" },
  setUserDetails: () => {},
});

export default UserContext;
