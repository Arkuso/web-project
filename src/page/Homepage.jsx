import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" className="nooks">
            Nooks
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="rectangle">
            <img src="" alt="search" className="search" />
            <span className="cari-produk-judul">Cari Produk</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          <Link to="/cart" className="cart-link">
            <img
              src="/images/Present.png"
              alt="Shopping Cart"
              className="shopping-cart"
            />
          </Link>
          <div className="auth-buttons">
            <Link to="/login" className="masuk">
              Masuk
            </Link>
            <Link to="/register" className="daftar">
              Daftar
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-search">
            <div className="rectangle">
              <img src="/images/Document.png" alt="search" className="search" />
              <span className="cari-produk-judul">Cari Produk</span>
            </div>
          </div>
          <Link to="/cart" className="mobile-cart-link">
            <img
              src="/images/Present.png"
              alt="Shopping Cart"
              className="shopping-cart"
            />
            <span>Keranjang</span>
          </Link>
          <div className="mobile-auth-buttons">
            <Link to="/login" className="masuk">
              Masuk
            </Link>
            <Link to="/register" className="daftar">
              Daftar
            </Link>
          </div>
        </div>
      </nav>

      {/* Rest of the Homepage content */}
      <div className="content-container">
        <div className="banner-section">
          <div className="flex-row-edcb">
            <div className="iklan" />
            <div className="iklan-3">
              <div className="back-to" />
            </div>
            <div className="iklan-4">
              <div className="back-to-5" />
            </div>
            <div className="menu-vertical" />
          </div>
        </div>

        <div className="categories-section">
          <div className="flex-row-ae">
            <div className="rectangle-6">
              <span className="diskon-k">Diskon 50K !</span>
            </div>
            <div className="empty" />
            <div className="rectangle-7">
              <div className="empty-8" />
              <span className="buku-baru-andalan">
                Buku Baru Andalan <br />
              </span>
            </div>
            <div className="rectangle-9">
              <div className="empty-a" />
              <span className="nyanyian-hobi">Nyanyian & Hobi</span>
            </div>
            <div className="rectangle-b">
              <div className="default" />
              <span className="stationery-sekolah-kantor">
                {" "}
                Statiory <br />
                Sekolah & Kantor
              </span>
            </div>
            <div className="rectangle-c">
              <div className="default-d" />
              <span className="internasional-book">Internasional Book</span>
            </div>
            <div className="back-to-e" />
          </div>
        </div>

        <div className="featured-books">
          <div className="flex-row-f">
            <span className="bacaan-favorite-pekan-ini">
              Bacaan Favorite Pekan Ini !
            </span>
            <span className="lihat-semua">
              Lihat semua
              <br />
            </span>
          </div>
          <div className="flex-row-c">
            <div className="rectangle-10">
              <div className="default-11" />
            </div>
            <div className="rectangle-12">
              <div className="img" />
              <span className="mimi-daisy"> Mimi Daisy</span>
              <span className="lovers-by-the-sea">Lovers By The Sea</span>
              <span className="price">Rp. 78.000</span>
              <div className="flex-row-b">
                <span className="discount">25%</span>
                <span className="original-price">Rp.100.000</span>
              </div>
            </div>
            <div className="rectangle-13">
              <div className="img-14">
                <div className="back-to-15" />
              </div>
              <span className="mimi-daisy-16"> Mimi Daisy</span>
              <span className="lovers-by-the-sea-17">Lovers By The Sea</span>
              <span className="rp-price">Rp. 78.000</span>
              <div className="flex-row-dfaa">
                <span className="percentage">25%</span>
                <span className="rp-price-18">Rp.100.000</span>
              </div>
            </div>
            <div className="rectangle-19">
              <div className="img-1a" />
              <span className="mimi-daisy-1b"> Mimi Daisy</span>
              <span className="lovers-by-the-sea-1c">Lovers By The Sea</span>
              <span className="rp-price-1d">Rp. 78.000</span>
              <div className="flex-row-cea">
                <span className="percentage-1e">25%</span>
                <span className="rp-price-1f">Rp.100.000</span>
              </div>
            </div>
            <div className="rectangle-20">
              <div className="img-21" />
              <span className="mimi-daisy-22"> Mimi Daisy</span>
              <span className="lovers-by-the-sea-23">Lovers By The Sea</span>
              <span className="rp-price-24">Rp. 78.000</span>
              <div className="flex-row-cf">
                <span className="percentage-25">25%</span>
                <span className="rp-price-26">Rp.100.000</span>
              </div>
            </div>
            <span className="favorite-reads">Bacaan Favorite Pekan Ini !</span>
          </div>
        </div>

        <div className="best-seller">
          <span className="best-sellers">Buku Terlaris</span>
          <span className="see-all">
            Lihat semua
            <br />
          </span>
          <div className="flex-row-dc">
            <div className="rectangle-27">
              <div className="img-28" />
              <span className="mimi-daisy-29"> Mimi Daisy</span>
              <span className="lovers-by-the-sea-2a">Lovers By The Sea</span>
              <span className="rp">Rp. 78.000</span>
              <div className="flex-row-2b">
                <span className="percent">25%</span>
                <span className="rp-2c">Rp.100.000</span>
              </div>
            </div>
            <div className="rectangle-2d">
              <div className="img-2e" />
              <span className="mimi-daisy-2f"> Mimi Daisy</span>
              <span className="lovers-by-the-sea-30">Lovers By The Sea</span>
              <span className="rp-31">Rp. 78.000</span>
              <div className="flex-row-ba">
                <span className="percent-32">25%</span>
                <span className="rp-33">Rp.100.000</span>
              </div>
            </div>
            <div className="rectangle-34">
              <div className="img-35">
                <div className="back-to-36" />
              </div>
              <span className="mimi-daisy-37"> Mimi Daisy</span>
              <span className="lovers-by-the-sea-38">Lovers By The Sea</span>
              <span className="rp-39">Rp. 78.000</span>
              <div className="flex-row-baf">
                <span className="percent-3a">25%</span>
                <span className="rp-3b">Rp.100.000</span>
              </div>
            </div>
            <div className="rectangle-3c">
              <div className="img-3d" />
              <span className="mimi-daisy-3e"> Mimi Daisy</span>
              <span className="lovers-by-the-sea-3f">Lovers By The Sea</span>
              <span className="rp-40">Rp. 78.000</span>
              <div className="flex-row-41">
                <span className="percentage-42">25%</span>
                <span className="rupiah">Rp.100.000</span>
              </div>
            </div>
            <div className="empty-43" />
          </div>
        </div>
      </div>
    </div>
  );
}
