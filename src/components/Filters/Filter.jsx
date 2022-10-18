import React, { useState } from "react";
import "./Filter.scss";
import FilterByCategory from "./FilterOptions/FilterByCategory";
import FilterByColor from "./FilterOptions/FilterByColor";
import FilterByPrice from "./FilterOptions/FilterByPrice";
import FilterByRating from "./FilterOptions/FilterByRating";

const Filter = () => {
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    rating: [],
  });

  console.log(filters);

  return (
    <div className="filters">
      <FilterByCategory setFilters={setFilters} />
      <FilterByColor setFilters={setFilters} />
      <FilterByPrice setFilters={setFilters} />
      <FilterByRating setFilters={setFilters} />
    </div>
  );
};

export default Filter;
