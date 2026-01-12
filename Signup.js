import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      setUser({ name, email });
      alert("Signup successful! 🎉");
      navigate("/booklist");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create Account ✨</h2>
        <p className="subtitle">Join BookNest and start your reading journey</p>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="signin-text">
          Already have an account?{" "}
          <span 
            className="link-text" 
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "#facc15" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
