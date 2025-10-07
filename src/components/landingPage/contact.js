import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Terima kasih! Pesan Anda telah dikirim.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">Hubungi Kami</h1>
          <p className="contact-subtitle">
            Ada pertanyaan atau butuh bantuan? Kami siap membantu Anda dengan senang hati.
            Silakan hubungi kami melalui form di bawah ini atau informasi kontak yang tersedia.
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="contoh@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Subjek pesan Anda"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
                placeholder="Tulis pesan Anda di sini..."
                rows={5}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              📤 Kirim Pesan
            </button>
          </form>

          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">📍</div>
                <h3 className="info-title">Alamat Toko</h3>
              </div>
              <p className="info-text">
                Jl. Mastrip<br />
                Sumbersari, Jember<br />
                Indonesia
              </p>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">📧</div>
                <h3 className="info-title">Email & Media Sosial</h3>
              </div>
              <p className="info-text">
                Email: info@tokobangunan.com<br />
                Support: support@tokobangunan.com
              </p>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">🕒</div>
                <h3 className="info-title">Jam Operasional</h3>
              </div>
              <p className="info-text">
                Senin - Jumat: 08:00 - 17:00 WIB<br />
                Sabtu: 08:00 - 15:00 WIB<br />
                Minggu & Hari Libur: Tutup
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;