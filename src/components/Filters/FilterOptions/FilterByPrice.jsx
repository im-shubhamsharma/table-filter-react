import React, { useState } from "react";

const FilterByPrice = ({ setFilters }) => {
  const [price, setPrice] = useState("100000");

  const handleChange = (e) => {
    const value = e.target.value;
    setPrice(e.target.value);
    setFilters((filter) => ({
      ...filter,
      price: value,
    }));
  };

  return (
    <div className="filter-option-container">
      <span>Filter By Price</span>
      <input
        min="0"
        max="100000"
        value={price}
        type="range"
        onChange={handleChange}
      />
      <div className="price-input">
        Max Price
        <input type="text" value={price} onChange={handleChange} />
      </div>
    </div>
  );
};

export default FilterByPrice;
