import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Signin.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      setUser({ email });

      if (location.state?.fromHome) {
        navigate("/booklist");
      } else {
        navigate("/");
      }
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login to Your Account 📖</h2>
        <p className="subtitle">Enter your credentials to continue your book journey</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Don’t have an account?{" "}
          <span 
            className="link-text" 
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer", color: "#facc15" }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
