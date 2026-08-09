import "./styles.css";
import Like from "./Like";
import { useState } from "react";

export default function App() {
  const [like, setLike] = useState(false);

  const updateLike = () => {
    setLike(false);
  };

  return (
    <>
      <button onClick={updateLike}>Update Like</button>
      <Like value={like} onChange={setLike} />
    </>
  );
}

//Step 1: send props from parent
//Step 2 : give default value
//Step 3 : check if programatically props changes will the child behave as expected
