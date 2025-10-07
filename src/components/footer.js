import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              🏗️ Toko Bangunan
            </div>
            <p>
              Mitra terpercaya untuk semua kebutuhan konstruksi dan renovasi Anda. 
              Menyediakan bahan bangunan berkualitas dengan pelayanan terbaik sejak 2025.
            </p>
          </div>

          <div className="footer-section">
            <h3>Menu Utama</h3>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/catalog">Katalog Produk</Link></li>
              <li><Link to="/about">Tentang Kami</Link></li>
              <li><Link to="/contact">Kontak</Link></li>
              <li><Link to="/cart">Keranjang Belanja</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Kontak Info</h3>
            <p>📍 Jl. Mastrip<br />Sumbersari, Jember</p>
            <p>📧 info@tokobangunan.com</p>
            <p>🕒 Senin - Sabtu: 08:00 - 17:00 WIB</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;