import { useState } from "react";

const Toggle = () => {
  const [toggleButton, setToggleButton] = useState(true);

  const setButtonStatus = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <button
      className={toggleButton ? "active" : "inActive"}
      onClick={() => {
        setButtonStatus();
      }}
    >
      {toggleButton ? "ON" : "OFF"}
    </button>
  );
};
export default Toggle;
