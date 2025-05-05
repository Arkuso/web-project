import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessBuy-page.css";

export default function Main() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleContinueShopping = () => {
    navigate(-1);
  };

  return (
    <div className="main-container">
      <div className="success-card">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="success-title">Pembelian Berhasil!</h1>
        <p className="success-message">
          Terima kasih telah berbelanja di NOOKS. Pesanan Anda akan segera
          diproses.
        </p>
        <div className="action-buttons">
          <button className="home-button" onClick={handleHome}>
            Kembali ke Home
          </button>
          <button className="shop-button" onClick={handleContinueShopping}>
            Lanjut Belanja
          </button>
        </div>
      </div>
    </div>
  );
}
