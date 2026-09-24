import "./styles.css";
import Shopping from "./Shopping";
import { Provider } from "react-redux";
import Store from "./Store";

export default function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Shopping></Shopping>
      </Provider>
    </div>
  );
}
