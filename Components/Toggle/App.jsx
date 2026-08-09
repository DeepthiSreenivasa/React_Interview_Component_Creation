import "./styles.css";
import Toggle from "./Toggle";
import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(true);
  };

  return (
    <>
      <button onClick={changeStatus}>Change Status Programatically</button>
      <Toggle value={status} onChange={setStatus} />
    </>
  );
}
