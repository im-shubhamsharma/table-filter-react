import React from "react";
import star from "../../assets/star.png";

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
        {filters.rating && filters.rating > 0 && (
          <div className="selected-filter-options">
            <label
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                fontSize: "1rem",
              }}
            >
              {filters.rating}
              <img width="15px" src={star} />
            </label>
            <button>X</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedFilters;
