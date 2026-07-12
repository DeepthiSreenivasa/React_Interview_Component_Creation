import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is Home Page</h1>
      <Link to="/Product">This is a link to product page</Link>
    </>
  );
};

export default Home;
