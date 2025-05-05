import React from "react";
import "./Buyerpage.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="rectangle" />
      <div className="flex-row-f">
        <div className="empty" />
        <span className="nooks">NOOKS</span>
        <span className="home">Home</span>
        <span className="service">Service</span>
        <span className="contact-us">Contact Us</span>
      </div>
      <div className="flex-row">
        <div className="empty-1" />
        <div className="empty-2" />
        <span className="pembelian-buku">Pembelian Buku </span>
        <div className="rectangle-3">
          <span className="nama-lengkap">Nama Lengkap</span>
          <div className="rectangle-4">
            <span className="masukan-nama">Masukan Nama. . .</span>
          </div>
          <span className="judul-buku">Judul Buku</span>
          <div className="rectangle-5">
            <span className="beli">Beli</span>
          </div>
          <div className="default" />
          <div className="rectangle-6">
            <span className="masukan-judul-buku">Masukan Judul Buku...</span>
          </div>
          <span className="alamat">Alamat</span>
          <div className="rectangle-7">
            <span className="input-address">Masukan Alamat...</span>
          </div>
        </div>
        <div className="empty-div" />
        <div className="empty-div-8" />
        <div className="empty-div-9" />
      </div>
    </div>
  );
}
