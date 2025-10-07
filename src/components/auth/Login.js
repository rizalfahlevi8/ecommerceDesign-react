import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const hardcodedUser = {
  username: "admin",
  password: "admin",
};

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === hardcodedUser.username &&
      password === hardcodedUser.password
    ) {
      onLogin({ username });
      navigate("/");
    } else {
      setError("Username atau password salah.");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="login-header">
          <span className="login-icon">🏗️</span>
          <h2>Toko Bangunan</h2>
          <p className="login-subtitle">Silakan masuk ke akun Anda</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="Masukkan password"
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;