import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";

const AppRouterProvider = () => {
  return <RouterProvider router={Routes}></RouterProvider>;
};

export default AppRouterProvider;
