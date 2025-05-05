import React from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";

export default function Main() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/Register");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      <div className="flex-row-ed">
        <span className="nooks" onClick={handleHome}>
          NOOKS
        </span>
        <nav>
          <span className="home" onClick={handleHome}>
            Home
          </span>
          <span className="service">Service</span>
          <span className="contact-us">Contact Us</span>
        </nav>
      </div>

      <div className="flex-row">
        <div className="rectangle">
          <div className="flex-column-cd">
            <div className="welcome-message">WELCOME TO NOOKS !</div>
            <div className="information-text">
              Nooks hadir untuk kamu yang haus akan pengetahuan dan petualangan.
              Jelajahi ribuan judul buku dari berbagai genre disini. Yuk mulai
              perjalanan membacamu!
            </div>
          </div>
        </div>

        <div className="login-form">
          <h2 className="sign-in">Log In</h2>
          <input type="text" className="input-field" placeholder="Username" />
          
          <input
            type="password"
            className="input-field"
            placeholder="Password"
          />
          <button className="login-button">Login</button>
          <div className="register-link" onClick={handleRegister}>
            Belum punya akun? Daftar sekarang
          </div>
        </div>
      </div>
    </div>
  );
}
