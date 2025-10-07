import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount = 0 }) {
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
        
        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link">Beranda</Link></li>
          <li><Link to="/catalog" className="nav-link">Katalog</Link></li>
          <li><Link to="/about" className="nav-link">Tentang</Link></li>
          <li><Link to="/contact" className="nav-link">Kontak</Link></li>
          <li>
            <Link to="/cart" className="nav-link cart-link">
              🛒 Keranjang
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;