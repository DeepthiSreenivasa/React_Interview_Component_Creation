import { createContext } from "react";

const UserDetailsContext = createContext({
  userFirstName: "",
  setUserFirstName: () => {},
});

export default UserDetailsContext;
