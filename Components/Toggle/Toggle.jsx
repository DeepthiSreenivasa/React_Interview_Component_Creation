import { useEffect } from "react";

const Toggle = ({ value = false, onChange }) => {
  //   useEffect(() => {
  //     onChange(!value);
  //   }, [value]);
  //You dont have to use useEffect here because you are not doing any update contidionally unclike counter

  const changeStatus = () => {
    onChange(!value);
  };

  return (
    <>
      <h1>This is Toggle Page</h1>
      <button onClick={changeStatus}>Change Status</button>
      <div>{value ? "ON" : "OFF"}</div>
    </>
  );
};

export default Toggle;
