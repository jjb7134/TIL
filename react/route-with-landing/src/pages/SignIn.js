import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

function SignIn() {
  return (
    <div>
      <h1>SignIn</h1>
      <div>
        <label>이름</label>
        <input type="button" value="명단 라우팅" />
      </div>
      <Link to={SignUp}>
        <input type="button" value="sign up" />
      </Link>
    </div>
  );
}

export default SignIn;
