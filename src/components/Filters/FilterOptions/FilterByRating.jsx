import React, { useState, useEffect } from "react";
import star from "../../../assets/star.png";

const FilterByRating = ({ setFilters }) => {
  const [ratings, setRatings] = useState({
    fourandabove: false,
    threeandabove: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setRatings((prevRating) => ({
      ...prevRating,
      [name]: checked,
    }));
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
      <div className="rating-filter">
        <input
          type="checkbox"
          id="fourandabove"
          name="fourandabove"
          checked={ratings.fourandabove}
          onChange={handleChange}
        />
        <label htmlFor="fourandabove">
          4<img width="20px" src={star} /> & above
        </label>
      </div>
      <div className="rating-filter">
        <input
          type="checkbox"
          id="threeandabove"
          name="threeandabove"
          checked={ratings.threeandabove}
          onChange={handleChange}
        />
        <label htmlFor="threeandabove">
          3<img width="20px" src={star} /> & above
        </label>
      </div>
    </div>
  );
};

export default FilterByRating;
