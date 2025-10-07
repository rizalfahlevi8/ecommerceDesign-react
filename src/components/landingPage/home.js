import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="container">
        <div className="hero-section">
          <h1 className="hero-title">
            Solusi Terlengkap Bahan Bangunan
          </h1>
          <p className="hero-subtitle">
            Dapatkan berbagai macam bahan bangunan berkualitas tinggi dengan harga terjangkau. 
            Dari semen hingga keramik, semua kebutuhan konstruksi Anda tersedia di sini.
          </p>
          
          <div className="hero-features">
            <div className="feature-card">
              <span className="feature-icon">📦</span>
              <h3 className="feature-title">Produk Lengkap</h3>
              <p className="feature-description">
                Semen, bata, cat, pipa, keramik, dan ribuan produk bangunan lainnya
              </p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">🚚</span>
              <h3 className="feature-title">Pengiriman Cepat</h3>
              <p className="feature-description">
                Layanan pengiriman ke seluruh Indonesia dengan sistem logistik terpercaya
              </p>
            </div>
            
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h3 className="feature-title">Harga Terjangkau</h3>
              <p className="feature-description">
                Dapatkan harga terbaik dengan diskon menarik setiap harinya
              </p>
            </div>
          </div>
          
          <div className="hero-actions">
            <Link to="/catalog" className="btn btn-primary">
              🛍️ Lihat Katalog
            </Link>
            <Link to="/about" className="btn btn-secondary">
              📖 Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;