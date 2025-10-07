import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  cartCount = 0,
  user,
  onLoginClick,
  onLogout,
  onRegisterClick,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🏗️ Toko Bangunan
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="nav-link">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/catalog" className="nav-link">
              Katalog
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              Tentang
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Kontak
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link cart-link">
              🛒 Keranjang
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
          <li>
            {user ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span style={{ color: "white", fontWeight: 600 }}>
                  {user.username}
                </span>
                <button
                  onClick={onLogout}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "white",
                    border: "none",
                    borderRadius: 5,
                    padding: "4px 10px",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                  className="btn-logout"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={onLoginClick}
                  style={{
                    background: "white",
                    color: "#1976d2",
                    border: "none",
                    borderRadius: 5,
                    padding: "6px 16px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(25, 118, 210, 0.08)",
                    transition: "background 0.18s",
                  }}
                  className="btn-login-navbar"
                >
                  Login
                </button>
                <button
                  onClick={onRegisterClick}
                  style={{
                    background: "#1d4ed8",
                    color: "white",
                    border: "2px solid white", 
                    borderRadius: 5,
                    padding: "6px 16px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(25, 118, 210, 0.08)",
                    transition: "background 0.18s",
                  }}
                  className="btn-register-navbar"
                >
                  Register
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
