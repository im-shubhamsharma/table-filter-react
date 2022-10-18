import React, { useEffect, useState } from "react";

const FilterByCategory = ({ setFilters }) => {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory(value);
  };

  useEffect(() => {
    setFilters((filter) => ({
      ...filter,
      category: category,
    }));
  }, [category]);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setFilters((filter) => ({
  //     ...filter,
  //     category: [...filter.category, value],
  //   }));
  // }

  return (
    <div className="filter-option-container">
      <label>
        Filter by category
        <select className="filter-select" onChange={handleChange}>
          <option>All</option>
          <option>Electronics</option>
          <option>Shoes</option>
          <option>Clothing</option>
          <option>Groceries</option>
          <option>Accesories</option>
        </select>
      </label>
    </div>
  );
};

export default FilterByCategory;
