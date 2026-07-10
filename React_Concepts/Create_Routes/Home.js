import { Link } from "react-router-dom"; /////// MISTAKE Link also has to be exported

const Home = () => {
  return (
    <>
      <h1>This Home Page</h1>
      <Link to="/products">Product Page</Link>{" "}
      {/****  MISTAKE Link tag has to be used along with to */}
    </>
  );
};

export default Home;
