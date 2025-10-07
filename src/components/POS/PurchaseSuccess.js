import React from "react";
import { Link, useNavigate } from "react-router-dom";

const paymentLabel = {
  transfer: "Transfer Bank",
  ewallet: "E-Wallet / QRIS",
  cod: "Bayar di Tempat (COD)",
};

function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function PurchaseSuccess({ order }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!order) {
      // Redirect ke katalog jika data order tidak ada
      const timer = setTimeout(() => navigate("/catalog"), 1800);
      return () => clearTimeout(timer);
    }
  }, [order, navigate]);

  if (!order) {
    return (
      <div style={{ textAlign: "center", padding: 50 }}>
        <div
          style={{
            display: "inline-block",
            background: "#ffecec",
            borderRadius: "50%",
            padding: 18,
            marginBottom: 10,
            boxShadow: "0 2px 10px rgba(241,67,67,0.09)",
          }}
        >
          <span style={{ fontSize: 52, color: "#f14343" }} role="img" aria-label="error">⚠️</span>
        </div>
        <div style={{ fontWeight: 700, color: "#f14343", fontSize: 20, marginBottom: 6 }}>
          Data pesanan tidak ditemukan.
        </div>
        <div style={{ color: "#555" }}>Anda akan dialihkan ke katalog...</div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 520, margin: "60px auto", textAlign: "center" }}>
      <div
        style={{
          background: "#f3fff6",
          border: "1.5px solid #18a10044",
          borderRadius: 10,
          margin: "0 auto 24px",
          padding: "24px 16px",
          maxWidth: 440,
          boxShadow: "0 1px 8px rgba(24,161,0,0.05)",
        }}
      >
        <h2 style={{
          fontWeight: 700,
          color: "#18a100",
          fontSize: 28,
          marginBottom: 10,
        }}>
          Pembelian Berhasil!
        </h2>
        <p style={{ color: "#333", fontSize: 17, margin: "0 0 14px" }}>
          Terima kasih sudah berbelanja.<br />
          Pesanan Anda telah diterima dan sedang diproses.
        </p>
        <div style={{
          background: "#fff",
          borderRadius: 7,
          border: "1px solid #e5f6ea",
          padding: "10px 11px",
          margin: "15px 0 10px 0",
          textAlign: "left",
        }}>
          <div style={{ fontWeight: 600, marginBottom: 3 }}>Barang yang dibeli:</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {order.items.map((item, idx) => (
              <li key={idx} style={{
                borderBottom: idx < order.items.length - 1 ? "1px solid #e5f6ea" : "none",
                padding: "7px 0"
              }}>
                <span style={{ fontWeight: 500 }}>{item.name}</span>
                <span style={{ marginLeft: 7, color: "#007bff" }}>x{item.qty}</span>
                <span style={{ float: "right", color: "#444" }}>
                  {formatRupiah(Math.round(item.price * (1 - item.discount)))} /pcs
                </span>
                {item.discount > 0 &&
                  <span style={{ marginLeft: 8, color: "#e65100", fontWeight: 500, fontSize: 12 }}>
                    -{Math.round(item.discount * 100)}% OFF
                  </span>
                }
              </li>
            ))}
          </ul>
        </div>
        <div style={{ margin: "14px 0 9px 0", textAlign: "left" }}>
          <div>
            <b>Metode Pembayaran:</b>
            <span style={{ marginLeft: 5, color: "#007bff", fontWeight: 600 }}>
              {paymentLabel[order.paymentMethod] || order.paymentMethod}
            </span>
          </div>
          <div style={{ marginTop: 6 }}>
            <b>Alamat Pengiriman:</b>
            <div style={{
              background: "#f9f9f9",
              padding: "7px 10px",
              borderRadius: 4,
              fontSize: 15,
              marginTop: 2,
              color: "#555",
              fontWeight: 500,
              border: "1px solid #f1f1f1",
              wordBreak: "break-word"
            }}>
              {order.shippingAddress}
            </div>
          </div>
        </div>
        <div style={{
          margin: "19px 0 0 0",
          fontSize: 19,
          color: "#18a100",
          fontWeight: 700,
          letterSpacing: "0.01em"
        }}>
          Total Belanja: {formatRupiah(order.total)}
        </div>
      </div>
      <Link to="/catalog">
        <button
          style={{
            padding: "10px 34px",
            background: "#007bff",
            color: "#fff",
            fontWeight: 700,
            fontSize: 17,
            border: "none",
            borderRadius: 7,
            cursor: "pointer",
            letterSpacing: ".04em",
            marginTop: 4,
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)"
          }}
        >
          Kembali ke Katalog
        </button>
      </Link>
    </div>
  );
}

export default PurchaseSuccess;