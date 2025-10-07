import React, { useEffect, useState } from "react";

function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

const paymentLabel = {
  transfer: "Transfer Bank",
  ewallet: "E-Wallet / QRIS",
  cod: "Bayar di Tempat (COD)",
};

function OrderHistory({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user && user.username) {
      const ordersRaw = localStorage.getItem(`orders_${user.username}`);
      setOrders(ordersRaw ? JSON.parse(ordersRaw) : []);
    }
  }, [user]);

  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#fafbfc",
          minHeight: "43.5vh",
        }}
      >
        <h2>Riwayat Pesanan</h2>
        <div>Silakan login untuk melihat riwayat pesanan Anda.</div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "43.5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#fafbfc",
        overflowY: "auto",
      }}
    >
      <div style={{ width: "100%", maxWidth: 700, margin: "40px 0" }}>
        <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: 32 }}>
          Riwayat Pesanan
        </h2>
        {orders.length === 0 && (
          <div style={{ textAlign: "center", color: "#888", marginTop: 30 }}>
            Belum ada riwayat pesanan.
          </div>
        )}
        {orders.map((order, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #e5f6ea",
              borderRadius: 8,
              margin: "20px 0",
              background: "#f8fff9",
              padding: 24,
              boxShadow: "0 1px 6px rgba(24,161,0,0.04)",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>
              Pesanan #{orders.length - idx}
            </div>
            <div>
              <b>Tanggal:</b>{" "}
              {order.date
                ? new Date(order.date).toLocaleString("id-ID")
                : "-"}
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 7,
                border: "1px solid #e5f6ea",
                padding: "8px 12px",
                margin: "14px 0 9px 0",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 2 }}>Barang:</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {order.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    style={{
                      borderBottom:
                        itemIdx < order.items.length - 1
                          ? "1px solid #e5f6ea"
                          : "none",
                      padding: "6px 0",
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>{item.name}</span>
                    <span style={{ marginLeft: 7, color: "#007bff" }}>
                      x{item.qty}
                    </span>
                    <span style={{ float: "right", color: "#444" }}>
                      {formatRupiah(
                        Math.round(item.price * (1 - (item.discount || 0)))
                      )}{" "}
                      /pcs
                    </span>
                    {item.discount > 0 && (
                      <span
                        style={{
                          marginLeft: 8,
                          color: "#e65100",
                          fontWeight: 500,
                          fontSize: 12,
                        }}
                      >
                        -{Math.round(item.discount * 100)}% OFF
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <b>Metode Pembayaran:</b>{" "}
              <span style={{ color: "#007bff", fontWeight: 600 }}>
                {paymentLabel[order.paymentMethod] || order.paymentMethod}
              </span>
            </div>
            <div style={{ margin: "7px 0" }}>
              <b>Alamat Pengiriman:</b>
              <div
                style={{
                  background: "#f9f9f9",
                  padding: "5px 10px",
                  borderRadius: 4,
                  fontSize: 15,
                  color: "#555",
                  fontWeight: 500,
                  border: "1px solid #f1f1f1",
                  wordBreak: "break-word",
                }}
              >
                {order.shippingAddress}
              </div>
            </div>
            <div
              style={{
                margin: "9px 0 0 0",
                fontSize: 17,
                color: "#18a100",
                fontWeight: 700,
                letterSpacing: "0.01em",
              }}
            >
              Total: {formatRupiah(order.total)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;