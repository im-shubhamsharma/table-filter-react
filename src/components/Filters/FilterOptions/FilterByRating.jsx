import React, { useState, useEffect } from "react";
import star from "../../../assets/star.png";

const FilterByRating = ({ setFilters }) => {
  const [ratings, setRatings] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setRatings(e.target.value);
  };

  useEffect(() => {
    setFilters((filter) => ({
      ...filter,
      rating: ratings,
    }));
  }, [ratings]);


  return (
    <div className="filter-option-container">
      Filter By Rating
      <input
        min="0"
        max="5"
        value={ratings}
        type="range"
        onChange={handleChange}
      />
      {ratings > 0 && (
        <div className="price-input">
          Rating: {ratings} <img width="20px"  src={star} />
        </div>
      )}
    </div>
  );
};

export default FilterByRating;
