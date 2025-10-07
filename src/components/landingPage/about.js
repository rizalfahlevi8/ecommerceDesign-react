import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="container">
        <div className="about-header">
          <h1 className="about-title">Tentang Toko Bangunan</h1>
          <p className="about-subtitle">
            Mitra terpercaya untuk semua kebutuhan konstruksi dan renovasi Anda sejak 2020
          </p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <h3 className="card-title">Visi Kami</h3>
            <p className="card-text">
              Menjadi distributor bahan bangunan terdepan di Indonesia yang menghadirkan 
              solusi konstruksi berkualitas tinggi dengan pelayanan terbaik.
            </p>
          </div>

          <div className="about-card">
            <h3 className="card-title">Misi Kami</h3>
            <p className="card-text">
              Menyediakan produk bahan bangunan berkualitas dengan harga kompetitif, 
              didukung layanan profesional dan sistem distribusi yang handal.
            </p>
          </div>

          <div className="about-card">
            <h3 className="card-title">Nilai Kami</h3>
            <p className="card-text">
              Integritas, kualitas, inovasi, dan kepuasan pelanggan adalah fondasi 
              utama dalam setiap aspek bisnis kami.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Pelanggan Puas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Produk Tersedia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Kota Terjangkau</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Tahun Pengalaman</span>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <h3 className="contact-title">Informasi Kontak</h3>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <span className="contact-label">Alamat</span>
                <p className="contact-text">Jl. Mastrip, Sumbersari, Jember</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <span className="contact-label">Email</span>
                <p className="contact-text">info@tokobangunan.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <div>
                <span className="contact-label">Jam Operasional</span>
                <p className="contact-text">Senin - Sabtu: 08:00 - 17:00 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;