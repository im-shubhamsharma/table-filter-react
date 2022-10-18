import React from "react";
import star from "../../assets/star.png"

const SelectedFilters = ({ filters, setFilters }) => {
  return (
    <div>
      Selected Filters
      <div className="selected-filter-options-container">
        {filters.category && (
          <div className="selected-filter-options">
            <p>{filters.category}</p>
            <button>X</button>
          </div>
        )}
        {filters.color.map((category) => (
          <div className="selected-filter-options">
            <p>{category}</p>
            <button>X</button>
          </div>
        ))}
        {filters.price && (
          <div className="selected-filter-options">
            <p>{filters.price}</p>
            <button>X</button>
          </div>
        )}
        {filters.rating.fourandabove && (
          <div className="selected-filter-options">
            <label>
              4<img width="20px" src={star} /> & above
            </label>
            <button>X</button>
          </div>
        )}
        {filters.rating.threeandabove && (
          <div className="selected-filter-options">
            <label>
              3<img width="20px" src={star} /> & above
            </label>
            <button>X</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedFilters;
