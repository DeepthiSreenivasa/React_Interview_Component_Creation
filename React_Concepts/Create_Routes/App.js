import Body from "./Body";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default App;
