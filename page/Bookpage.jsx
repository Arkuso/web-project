import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bookpage.css";

export default function Main() {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/SuccessBuy");
  };

  return (
    <div className="main-container">
      <div className="book-details">
        <div className="book-image">
          <img
            src="https://example.com/book-cover.jpg"
            alt="Lovers By The Sea"
          />
        </div>

        <div className="book-info">
          <h1 className="book-title">Lovers By The Sea</h1>
          <h2 className="book-author">Mimi Daysi</h2>

          <div className="price-container">
            <span className="current-price">Rp.78.000</span>
            <span className="original-price">Rp.100.000</span>
          </div>

          <div className="action-buttons">
            <button className="cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="favorite-button">Add to Favorite</button>
            <button className="share-button">Share</button>
          </div>

          <div className="description-container">
            <h3 className="description-title">Deskripsi</h3>
            <p className="description-text">
              Mengisahkan Avie, seorang ibu tunggal yang bekerja di proyek
              konservasi penyu di North Carolina. Di sana, ia bertemu dengan
              seseorang yang mengubah hidupnya...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
