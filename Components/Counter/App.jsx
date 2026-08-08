import "./styles.css";
import Counter from "./Counter";
import { useState } from "react";

export default function App() {
  const [max, setMax] = useState(10);
  return (
    <>
      <button onClick={() => setMax(12)}>Inc Maximum</button>
      <Counter initialValue={6} min={5} max={max} step={1} />
    </>
  );
}

//Step 1 - make initial Value come from parent
//Step 2 - give initial Value a default value
//Step 3 - make min Value entering from the parent
//Step 4 - what if min is not provided so give a default value for min
//Step 5 - addding steps
//Step 6 - make sure the step doesnt go less than min and max
//Step 7 - disabling the buttons accordingly -> Make sure you disable the buttons  as well as the function
//Step 8 - when props changes programatically the child gets re-rendered not remounter
//because of this you may not see UI values getting updated as expected
//Soln: you can change the childs key - Not preferrable "RE-RENDER and RE-MOUNTING IS different"
//rather you should useEffect in child and implement it as a side effect
//But with all these the component is still uncontrolled as the state is declared inside the child
//component
