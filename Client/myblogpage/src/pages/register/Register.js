import React from "react";
import "../register/register.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="RTitle">Register</span>
      <form className="RForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="RInput"
          type="text"
          placeholder="Enter your Name..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          className="RInput"
          type="phone"
          placeholder="Enter your Phone Number..."
        />
        <label>Email</label>
        <input
          className="RInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="RInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="RButton" type="submit">
          Register
        </button>
      </form>
      <button className="RLoginButton">Login</button>
    </div>
  );
}

export default Register;
