import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Main() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      <div className="header">
        <span className="nooks" onClick={handleHome}>
          NOOKS
        </span>
        <div className="nav-links">
          <span className="home" onClick={handleHome}>
            Home
          </span>
          <span className="service">Service</span>
          <span className="contact-us">Contact Us</span>
        </div>
      </div>

      <div className="register-container">
        <h2 className="register-title">Register</h2>
        <div className="input-group">
          <input type="text" className="input-field" placeholder="Username" />
          <input type="email" className="input-field" placeholder="Email" />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
          />
        </div>
        <button className="register-button">Daftar</button>
        <div className="login-link" onClick={handleLogin}>
          Sudah punya akun? Login sekarang
        </div>
      </div>
    </div>
  );
}
