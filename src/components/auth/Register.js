import React, { useState } from "react";
import "./auth.css";

function Register({ show, onClose, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Semua field wajib diisi.");
      return;
    }
    if (password !== confirm) {
      setError("Password tidak sama.");
      return;
    }
    let users = JSON.parse(localStorage.getItem("registered_users") || "[]");
    if (users.find(u => u.username === username)) {
      setError("Username sudah terdaftar.");
      return;
    }
    users.push({ username, password });
    localStorage.setItem("registered_users", JSON.stringify(users));
    setSuccess(true);
    setError("");
    setTimeout(() => {
      onRegister({ username });
      setUsername(""); setPassword(""); setConfirm(""); setSuccess(false);
    }, 700);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.25)",
        zIndex: 1100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onClick={onClose}
    >
      <div
        className="login-card"
        onClick={e => e.stopPropagation()}
      >
        <div className="login-header">
          <span className="login-icon">🏗️</span>
          <h2>Daftar Akun</h2>
          <p className="login-subtitle">Buat akun baru untuk belanja</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reg-username">Username</label>
            <input
              id="reg-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
              autoComplete="username"
              placeholder="Masukkan username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-password">Password</label>
            <input
              id="reg-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              placeholder="Masukkan password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-confirm">Konfirmasi Password</label>
            <input
              id="reg-confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              autoComplete="new-password"
              placeholder="Ulangi password"
            />
          </div>
          {error && <div className="error">{error}</div>}
          {success && <div className="error" style={{ background: "#e7ffea", color: "#388e3c", borderColor: "#a5d6a7" }}>Pendaftaran berhasil! Login otomatis...</div>}
          <button type="submit" className="btn-login">
            Register
          </button>
          <button
            type="button"
            style={{
              width: "100%",
              marginTop: "0.5rem",
              background: "#f2f7fe",
              color: "#1976d2",
              border: "none",
              borderRadius: 6,
              padding: "0.75rem",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer"
            }}
            onClick={onClose}
            className="btn-cancel"
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;