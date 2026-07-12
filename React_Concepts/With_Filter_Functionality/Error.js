import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError(); //Misate you forgot the name it is useRouteError

  return <h1>You landed on an invalid Route</h1>;
};

export default Error;
