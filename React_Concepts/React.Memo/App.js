//React.memo - when you update any prop in the parent then only child
//should get rerendered. Not when you update any state variable in
//the parent to avoid this we wrap entire child component in REact.memo

//Also u can have contorlled re renders of the child depending on which prop
//exactly changed this is got by returning a comparison operation from React.memo

//Dont use React.memo => when the computaiton is very simeple , when parent component rarely updates the props,
//when we pass complex objects React.memo becomes ineffective as these objects does shallow comparison

import Home from "./Home";
import { useState } from "react";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [text, setText] = useState(0);

  const getText = (event) => {
    setText(event.target.value);
  };

  const incCount1 = () => {
    setCount1((prev) => prev + 1);
  };
  const incCount2 = () => {
    setCount2((prev) => prev + 1);
  };

  return (
    <>
      <input
        onInput={(event) => {
          getText(event);
        }}
      ></input>
      <button
        onClick={() => {
          incCount1();
        }}
      >
        IncCount1
      </button>
      <button
        onClick={() => {
          incCount2();
        }}
      >
        IncCount2
      </button>

      <Home count1={count1} count2={count2}></Home>
    </>
  );
};

export default App;
