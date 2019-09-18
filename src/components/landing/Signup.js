import React from "react";
import { Link } from "react-router-dom";

const Signup = () => (
  <div className="signup">
    <p className="signup__text">Try Finn now</p>
    <h1 className="signup__title">Start selling in just 5 minutes.</h1>

    <div className="signup__btn-container">
      <Link to="/login">
        <button className="signup__btn">Sign up</button>
      </Link>
    </div>
  </div>
);

export default Signup;
