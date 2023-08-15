import React from "react";
import Add from "../img/addAvatar.png";

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Application</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p>You don't have account? Register</p>
      </div>
    </div>
  );
};
