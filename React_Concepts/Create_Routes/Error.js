import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError(); ///Mistake you have to use this hook

  return <div>You have an error in the route</div>;
};

export default Error;
