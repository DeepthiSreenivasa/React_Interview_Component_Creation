import { useState, useEffect } from "react";

const Counter = ({ initialValue = 0, min = 0, max = 100, step = 1 }) => {
  let validInitialValue = initialValue;

  useEffect(() => {
    setCounter((prev) => prev); //Just reset the counter, Note you also have to validate and set counter
  }, [max]);

  const validateInputs = () => {
    if (min > max) {
      throw new Error("Min should always be greater than Max");
    }

    if (step < 0) {
      throw new Error("Step should be greater than 0");
    }

    if (validInitialValue > max) {
      validInitialValue = max;
    }
    if (validInitialValue < min) {
      validInitialValue = min;
    }
    return validInitialValue;
  };

  const [counter, setCounter] = useState(validateInputs());

  //   useEffect(() => {
  //     _, [max];
  //   });

  const incCount = () => {
    setCounter((prev) => {
      if (prev + step > max) {
        return prev;
      }
      return prev + step;
    });
  };

  const decCount = () => {
    setCounter((prev) => {
      if (prev - step < min) {
        return prev;
      }
      return prev - step;
    });
  };

  const resetCounter = () => {
    // setCounter((prev) => (prev = initialValue));//Do this only if new value depends on prev value for now
    setCounter(validInitialValue);
  };

  return (
    <>
      <h1>This is Counter Page</h1>
      <button onClick={decCount} disabled={counter - step < min}>
        Decrement Count
      </button>{" "}
      {counter}{" "}
      <button onClick={incCount} disabled={counter + step > max}>
        Increment Count
      </button>
      <button onClick={resetCounter}>Reset Counter</button>
    </>
  );
};

export default Counter;
