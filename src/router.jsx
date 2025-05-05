// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import untuk routing
import Homepage from "./page/Homepage"; // Halaman LandingPage
import Loginpage from "./page/Loginpage"; // Halaman Login
import Registerpage from "./page/Register"; // Halaman Register
import Bookpage from "./page/Bookpage"; // Halaman Users/Profile
import SuccessBuy from "./page/SuccessBuy-page"; // Halaman Users/SuccessBuy
import Buyerpage from "./page/Buyerpage"; // Halaman Users/Profile

const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} /> {/* Halaman utama */}
    <Route path="/Login" element={<Loginpage />} /> {/* Halaman login */}
    <Route path="/Register" element={<Registerpage />} /> {/* Halaman register */}
    <Route path="/Bookpage" element={<Bookpage />} /> {/* Halaman pengguna */}
    <Route path="/SuccessBuy" element={<SuccessBuy />} /> {/* Halaman pengguna */}
    <Route path="/Buyerpage" element={<Buyerpage />} /> {/* Halaman pengguna */}
    <Route path="*" element={<Navigate to="/" replace />} /> {/* Fallback jika tidak ditemukan */}
  </Routes>
);

export default App;