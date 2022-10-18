import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.scss";
import FilterByCategory from "./FilterOptions/FilterByCategory";
import FilterByColor from "./FilterOptions/FilterByColor";
import FilterByPrice from "./FilterOptions/FilterByPrice";
import FilterByRating from "./FilterOptions/FilterByRating";
import SelectedFilters from "./SelectedFilters";
import { filterProductsAll } from "../../redux/features/products/productSlice";

const Filter = () => {
  const productsData = useSelector((store) =>
    store.filteredProducts ? store.filteredProducts : store.product.products
  );
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
    <div className="filters">
      <FilterByCategory setFilters={setFilters} />
      <FilterByColor setFilters={setFilters} />
      <FilterByPrice setFilters={setFilters} />
      <FilterByRating setFilters={setFilters} />
      <SelectedFilters filters={filters} setFilters={setFilters} />
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
