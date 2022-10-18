import React from "react";


const FilterByColor = ({setFilters}) => {

  const handleChange = (e) => {
      const value = e.target.attributes.value.textContent;
      setFilters(filter => ({
        ...filter,
        color : [...filter.color, value]
      }))
  };
  return (
    <div className="filter-option-container">
      Filter By Color
      <hr />
      <div className="color-container">
        <div onClick={handleChange} value="black"></div>
        <div onClick={handleChange} value="white"></div>
        <div onClick={handleChange} value="blue"></div>
        <div onClick={handleChange} value="red"></div>
        <div onClick={handleChange} value="yellow"></div>
      </div>
    </div>
  );
};

export default FilterByColor;
