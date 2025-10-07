import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product, onAddToCart }) {
  // Calculate discounted price if any
  const hasDiscount = product.discount && product.discount > 0;
  const discountPrice = hasDiscount
    ? product.price - Math.round(product.price * product.discount)
    : product.price;

  return (
    <div
      style={{
        border: "1px solid #e6e6e6",
        borderRadius: "8px",
        padding: "20px 18px 18px 18px",
        margin: "14px 10px",
        width: 240,
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "110px",
            objectFit: "cover",
            borderRadius: "6px",
            marginBottom: 12,
            background: "#f5f5f5"
          }}
        />
      )}
      <div>
        <div style={{ fontWeight: 600, color: "#555", fontSize: 14, marginBottom: 2 }}>
          {product.label}
        </div>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
          {product.name}
        </div>
        <div
          style={{
            display: "inline-block",
            fontSize: 11,
            background: "#f2f3f5",
            color: "#007bff",
            borderRadius: 10,
            padding: "2px 14px",
            fontWeight: 600,
            letterSpacing: 1,
            marginBottom: 10,
            marginTop: 2,
          }}
        >
          {product.category.toUpperCase()}
        </div>
        <div style={{ margin: "14px 0 0 0", fontWeight: 700, fontSize: 18, color: "#007bff" }}>
          {hasDiscount ? (
            <>
              <span style={{
                textDecoration: "line-through",
                color: "#888",
                fontWeight: 400,
                fontSize: 15,
                marginRight: 6
              }}>
                Rp {product.price.toLocaleString("id-ID")}
              </span>
              <span>
                Rp {discountPrice.toLocaleString("id-ID")}
              </span>
              <span style={{
                color: "#e65100",
                fontWeight: 600,
                fontSize: 13,
                marginLeft: 7
              }}>
                -{Math.round(product.discount * 100)}%
              </span>
            </>
          ) : (
            <>Rp {product.price.toLocaleString("id-ID")}</>
          )}
        </div>
        <div style={{ fontSize: 12, color: "#18a100", marginTop: 5 }}>
          Stock {product.stock}
        </div>
        <div style={{ fontSize: 12, color: "#006b9e", marginTop: 3 }}>
          Total dibeli: {product.totalSold || 0}
        </div>
      </div>
      <button
        onClick={onAddToCart}
        disabled={product.stock === 0}
        style={{
          padding: "10px 0",
          backgroundColor: product.stock === 0 ? "#bbb" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: product.stock === 0 ? "not-allowed" : "pointer",
          marginTop: 18,
          fontWeight: 600,
          fontSize: 15
        }}
      >
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    discount: PropTypes.number,
    stock: PropTypes.number,
    totalSold: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;