import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <h1>메인</h1>
      </Link>
      <Link to="/sign-in">
        <h1>로그인</h1>
      </Link>
      <Link to="/sign-up">
        <h1>가입</h1>
      </Link>
    </div>
  );
}

export default Header;
