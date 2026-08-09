import "./styles.css";
import Debounce from "./Debounce";

export default function App() {
  return <Debounce></Debounce>;
}

//Mistakes - You Should use setTimeout - because its like we wait
//Controller to be declared inside useEffect
//Dont have to cancel controller any where elese

//Step 1 : Call the api normmally
//Step 2: Create an abortController inside the useEffect
//Step 3: Append signal with API Call
//Step 4: do the cleanup
