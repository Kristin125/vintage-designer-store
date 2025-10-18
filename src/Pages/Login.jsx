import React, { useState } from "react";

const Login = () => {
  const [logged, setLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogged(true);
  };

  return (
    <div className="page container login-page">
      {!logged ? (
        <>
          <h2 className="section-title">Sign In</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" required />
            <label>Password</label>
            <input type="password" required />
            <button className="text-btn" type="submit">Log in</button>
          </form>
        </>
      ) : (
        <div className="logged">
          <h3>You are logged in (mock)</h3>
          <button className="text-btn" onClick={() => setLogged(false)}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default Login;
