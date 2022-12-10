import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      landingPage
      <br />
      {/* 링크 걸고 다른 링크 라우팅처리 */}
      <Link to="/sign-in">
        <button>꿀 피부 되깅</button>
      </Link>
    </div>
  );
}

export default LandingPage;
