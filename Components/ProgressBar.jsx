import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const inc = () => {
    setProgress((prev) => prev + 10);
  };
  const dec = () => {
    setProgress((prev) => prev - 10);
  };

  return (
    <>
      <button onClick={inc}>+10%</button>
      <div className="progressBar">
        <div
          style={{
            backgroundColor: "blue",
            width: `${progress}px`,
            height: "20px",
          }}
        >
          {progress}%
        </div>
      </div>
      <button  onClick={dec}>-10%</button>
    </>
  );
};

export default ProgressBar;
