import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is home page</h1>
      <Link to="/Products">Go TO Products PAge</Link>
    </>
  );
};

export default Home;
