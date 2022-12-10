import React from "react";
import { Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";

function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>
      <Link to="/">
        <input type="button" value="home" />
      </Link>
      <Link to="/sign-in">
        <input type="button" value="sign in" />
      </Link>
    </div>
  );
}

export default SignUp;
