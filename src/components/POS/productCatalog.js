import React, { useState } from "react";
import ProductCard from "./productCard";
import ProductFilter from "./productFilter";
// import { Link } from "react-router-dom";

function ProductCatalog({ products, onAddToCart, getProductData, cartCount }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [...new Set(products.map(p => p.category))];

  const handleFilter = (category) => setSelectedCategory(category);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <h2 style={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: 32,
        margin: "26px 0 10px 0"
      }}>
        Katalog Bahan Bangunan
      </h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 18
      }}>
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onFilter={handleFilter}
        />
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 8,
      }}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;