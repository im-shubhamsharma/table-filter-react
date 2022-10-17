import React, {useState} from "react";
import "./Filter.scss"
import FilterByCategory from "./FilterOptions/FilterByCategory";
import FilterByColor from "./FilterOptions/FilterByColor";

const Filter = () => {
    
  const [filters, setFilters] = useState({
    category: [],
    color: []
  })

  console.log(filters);

  return (
    <div className="filters">
      <FilterByCategory setFilters={setFilters} />
      <FilterByColor setFilters={setFilters} />
    </div>
  );
};

export default Filter;
