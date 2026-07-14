import { Link } from "react-router-dom";
import UserDetailsContext from "./UserDetailsContext";
import { useContext } from "react";

const Home = () => {
  const { userFirstName } = useContext(UserDetailsContext);
  //Mistake you missed to pass UserDetailsContext

  return (
    <>
      <h1>Welcome to Home Page {userFirstName}</h1>
      {/* <Link to="/Product">This is a link to product page</Link> */}
    </>
  );
};

export default Home;
