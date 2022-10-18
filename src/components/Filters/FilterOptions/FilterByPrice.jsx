import React, { useState } from "react";

const FilterByPrice = ({ setFilters }) => {
  const [price, setPrice] = useState("30000");

  const handleChange = (e) => {
    const value = e.target.value;
    setPrice(e.target.value);
    setFilters((filter) => ({
      ...filter,
      price: value,
    }));
    console.log(value);
  };

  return (
    <div className="filter-option-container">
      Filter By Price
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
