import React from "react";
import PropTypes from "prop-types";

function ProductFilter({ categories, selectedCategory, onFilter }) {
  return (
    <div style={{
      marginBottom: "24px",
      marginTop: "10px",
      display: "flex",
      alignItems: "center",
    }}>
      <label htmlFor="category-filter" style={{
        marginRight: "10px",
        fontWeight: "500",
        fontSize: 16
      }}>
        Filter by Category:
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={e => onFilter(e.target.value)}
        style={{
          padding: "6px 14px",
          borderRadius: "5px",
          border: "1.5px solid #bfc6d1",
          fontSize: 15
        }}
      >
        <option value="">All</option>
        {categories.map(cat => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

ProductFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};

ProductFilter.defaultProps = {
  selectedCategory: "",
};

export default ProductFilter;