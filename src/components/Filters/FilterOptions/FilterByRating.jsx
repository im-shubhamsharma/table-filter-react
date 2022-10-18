import React, { useState } from "react";
import star from "../../../assets/star.png";

const FilterByRating = ({ setFilters }) => {
  const [rating, setRating] = useState({
    fourandabove: true,
    threeandabove: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setRating((prevRating) => ({
      ...prevRating,
      [name]: checked,
    }));

    
  };

  console.log(rating);

  return (
    <div className="filter-option-container">
      Filter By Rating
      <div className="rating-filter">
        <input
          type="checkbox"
          name="fourandabove"
          value={rating.fourandabove}
          onChange={handleChange}
        />
        <label>
          4<img width="20px" src={star} /> & above
        </label>
      </div>
      <div className="rating-filter">
        <input
          type="checkbox"
          name="threeandabove"
          value={rating.threeandabove}
          onChange={handleChange}
        />
        <label>
          3<img width="20px" src={star} /> & above
        </label>
      </div>
    </div>
  );
};

export default FilterByRating;
