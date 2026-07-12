import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); //Misatke useNaviagte hook for naviagtion from js files
  const nameRef = useRef(null); ///Mistake: You shoudlf know that we use useRef when we do not want to rerender
  const passwordRef = useRef(null);

  const submitDetails = () => {
    let userDetails = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };
    postDetailsToApi(userDetails);
  };

  const postDetailsToApi = ({ username, password }) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //Mistake: Both in capitals Content-Type , application / json to be in quotes
      },
      body: JSON.stringify({
        //MISTAKE : Only JSON in caps stringify in small letter
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json()) //Misatke : then frist resolve the response
      .then((data) => navigate("/")) //Mistake : then next get the data
      .catch((err) => console.log("Err::", err)); //Misatek : then catch the errror
  };

  return (
    <>
      <h1>This is Login Page</h1>
      <label>NAME</label>
      <br />
      <input ref={nameRef} type="text" />{" "}
      {/**Mistake: You should also know that you shoudl access useref variable with ref*/}
      <br />
      <label>PASSWORD</label>
      <br />
      <input ref={passwordRef} type="password" />
      <br />
      <button
        onClick={() => {
          submitDetails();
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
