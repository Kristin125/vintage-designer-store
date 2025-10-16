import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <>
          <h1>Welcome Back</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>

            <button type="submit" className="btn-login">Login</button>
          </form>
        </>
      ) : (
        <div className="logout-view">
          <h2>You’re logged in!</h2>
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
