import { useState } from "react";

const Password = () => {
  const [visibility, setVisibility] = useState(false);

  const getPassword = () => {};

  const showPassword = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <input type={visibility ? "Text" : "Password"} onChange={getPassword} />
      <button onClick={showPassword}>{visibility ? "Hide" : "Show"}</button>
    </>
  );
};
export default Password;
