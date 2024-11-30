import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./loginform.css";

const Loginform = () => {
  function handleLogin(event) {
    event.preventDefault();
    return toast.error("Login functionality is not live yet");
  }

  return (
    <>
      <section className="loginform">
        <div className="container-login">
          <div className="wrapper">
            <div className="heading-login">
              <h1>Sign In</h1>
              <p>
                New User ?{" "}
                <span>
                  <Link to="/registration">Create an account</Link>
                </span>
              </p>
            </div>
            <form onSubmit={handleLogin} className="form" action="">
              <label className="label">
                Username
                <input type="text" name="name" />
              </label>
              <label className="label">
                Password
                <input type="text" name="password" />
              </label>
              <p className="forgot-pass">
                Forgot Password ?{" "}
                <span>
                  <Link to="/forgot-password">Cick here to reset</Link>
                </span>
              </p>
              <button className="submit-btn">Sign In</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginform;
