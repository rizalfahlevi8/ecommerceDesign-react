import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ShoppingCart({ cart, onRemoveItem, onCheckout, user }) {
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  // Total harga dan diskon
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );
  const totalDiscount = cart.reduce(
    (acc, item) =>
      acc +
      (item.product.discount
        ? item.product.price * item.product.discount * item.qty
        : 0),
    0
  );
  const total = subtotal - totalDiscount;

  // Simulasi pembayaran
  const paymentInfo = {
    transfer: "Silakan transfer ke rekening BCA 1234567890 a/n PT. Toko Bangunan",
    ewallet: "QRIS: [scan gambar di toko] atau kirim ke OVO/Gopay/Dana: 0812-xxxx-xxxx",
    cod: "Bayar di tempat (Cash on Delivery)",
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <h2 style={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: 32,
        margin: "0 0 26px 0"
      }}>
        Keranjang Belanja
      </h2>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ececec",
          borderRadius: "8px",
          margin: "0 0 30px 0",
          backgroundColor: "#fafbfc",
          minWidth: "330px",
          maxWidth: "100%",
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        }}
      >
        <h3 style={{
          fontWeight: 700, fontSize: 20, margin: 0, display: "inline-block"
        }}>
          <span role="img" aria-label="cart">🛒</span> Shopping Cart
        </h3>{" "}
        <span style={{
          color: "#444", fontWeight: 500, fontSize: 16, marginLeft: 4
        }}>
          ({totalItems} item{totalItems !== 1 ? "s" : ""})
        </span>
        <div style={{ marginTop: 10 }}>
          {cart.length === 0 ? (
            <span style={{ color: "#888", fontSize: 15 }}>
              Your cart is empty
            </span>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {cart.map(item => (
                <li key={item.product.id} style={{
                  marginBottom: 15, borderBottom: "1px solid #eee", paddingBottom: "8px"
                }}>
                  <span style={{ fontWeight: "600" }}>{item.product.name}</span>
                  <span style={{ color: "#007bff", fontSize: 13, marginLeft: 6 }}>
                    x{item.qty}
                  </span>
                  <br />
                  <span style={{ color: "#888" }}>
                    Rp {item.product.price.toLocaleString("id-ID")}
                  </span>
                  {item.product.discount &&
                    <span style={{
                      color: "#e65100",
                      fontWeight: 600,
                      fontSize: 13,
                      marginLeft: 8
                    }}>
                      -{Math.round(item.product.discount * 100)}% OFF
                    </span>
                  }
                  <br />
                  <span style={{ color: "#009e4e", fontWeight: 600 }}>
                    Total dibeli: {item.product.totalSold}
                  </span>
                  <br />
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    style={{
                      marginTop: "5px",
                      padding: "4px 14px",
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.95em",
                      fontWeight: 500,
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length > 0 && (
          <div style={{ marginTop: 12, borderTop: "1px solid #eee", paddingTop: 12 }}>
            <div style={{ fontSize: 15 }}>
              <b>Subtotal:</b> Rp {subtotal.toLocaleString("id-ID")}
            </div>
            <div style={{ fontSize: 15, color: "#e65100" }}>
              <b>Diskon:</b> -Rp {totalDiscount.toLocaleString("id-ID")}
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#007bff" }}>
              Total: Rp {total.toLocaleString("id-ID")}
            </div>
          </div>
        )}

        {/* Input Alamat dan Pembayaran */}
        {cart.length > 0 && (
          <div style={{ marginTop: 22 }}>
            <div style={{ marginBottom: 13 }}>
              <label style={{ fontWeight: 600 }}>Alamat Pengiriman:</label>
              <textarea
                value={shippingAddress}
                onChange={e => setShippingAddress(e.target.value)}
                rows={3}
                style={{
                  width: "100%",
                  padding: 8,
                  borderRadius: 4,
                  border: "1px solid #ddd",
                  marginTop: 4,
                  fontSize: 15
                }}
                placeholder="Tulis alamat lengkap pengiriman..."
                required
              />
            </div>
            <div style={{ marginBottom: 13 }}>
              <label style={{ fontWeight: 600 }}>Metode Pembayaran:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    checked={paymentMethod === "transfer"}
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  Transfer Bank
                </label><br />
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="ewallet"
                    checked={paymentMethod === "ewallet"}
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  E-Wallet / QRIS
                </label><br />
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={e => setPaymentMethod(e.target.value)}
                  />
                  Bayar di Tempat (COD)
                </label>
              </div>
            </div>
            {/* Simulasi pembayaran */}
            {paymentMethod &&
              <div style={{ marginBottom: 13, background: "#f5faff", borderRadius: 4, padding: 10, color: "#005e8a", fontSize: 15 }}>
                <b>Instruksi Pembayaran:</b>
                <div>{paymentInfo[paymentMethod]}</div>
                {paymentMethod === "transfer" &&
                  <div style={{ marginTop: 7, color: "#888", fontSize: 13 }}>
                    <i>Upload bukti transfer setelah melakukan pembayaran.</i>
                  </div>
                }
              </div>
            }
          </div>
        )}

        {/* Tombol Checkout */}
        {cart.length > 0 && (
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <button
              style={{
                padding: "10px 36px",
                background: "#18a100",
                color: "#fff",
                fontWeight: 700,
                fontSize: 18,
                border: "none",
                borderRadius: 6,
                cursor: cart.length === 0 ? "not-allowed" : "pointer",
                opacity: shippingAddress && paymentMethod ? 1 : 0.6,
                boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                letterSpacing: ".04em"
              }}
              disabled={!shippingAddress || !paymentMethod}
              onClick={() => {
                if (window.confirm("Apakah anda yakin ingin checkout?")) {
                  onCheckout({
                    shippingAddress,
                    paymentMethod
                  });
                  // Redirect akan dilakukan oleh App.js, jangan navigate di sini!
                }
              }}
            >
              Checkout{!user && " (Login Dulu)"}
            </button>
          </div>
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <Link to="/catalog">
          <button
            style={{
              padding: "8px 20px",
              background: "#007bff",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
            }}
          >
            ← Kembali ke Katalog
          </button>
        </Link>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.object.isRequired,
      qty: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default ShoppingCart;