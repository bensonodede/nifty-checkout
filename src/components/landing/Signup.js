import React from "react";
import { Link } from "react-router-dom";

const Signup = () => (
  <div className="signup">
    <h1 className="signup__title">Ready to get started?</h1>

    <div className="signup__btn-container">
      <Link to="/login">
        <button className="signup__btn">Sign up</button>
      </Link>
    </div>
  </div>
);

export default Signup;
