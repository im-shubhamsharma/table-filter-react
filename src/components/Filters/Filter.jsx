import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FilterByCategory from "./FilterOptions/FilterByCategory";
import FilterByColor from "./FilterOptions/FilterByColor";
import FilterByPrice from "./FilterOptions/FilterByPrice";
import FilterByRating from "./FilterOptions/FilterByRating";
import SelectedFilters from "./SelectedFilters";
import { filterProductsAll } from "../../redux/features/products/productSlice";
import "./Filter.scss";

const Filter = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    category: "",
    color: [],
  });

  const clearAllFilters = () => {
    setFilters({
      category: "",
      color: [],
    });
    dispatch(
      filterProductsAll({
        category: "",
        color: [],
      })
    );
  };

  return (
    <div className="sidebar-container">
      <div>
        <h2>Inventory Book</h2>
        <hr style={{ width: "100%", marginBottom:"1.5rem" }} />
        {/* <hr style={{ width: "100%", margin: "0" }} /> */}

        <div className="filters">
          <FilterByCategory setFilters={setFilters} />

          <FilterByColor setFilters={setFilters} />

          <FilterByPrice setFilters={setFilters} />

          <FilterByRating setFilters={setFilters} />
          <SelectedFilters filters={filters} setFilters={setFilters} />
        </div>
      </div>

      <div className="filters-button-container">
        <button onClick={() => dispatch(filterProductsAll(filters))}>
          Submit
        </button>
        <button onClick={clearAllFilters}>Clear All Filters</button>
      </div>
    </div>
  );
};

export default Filter;
