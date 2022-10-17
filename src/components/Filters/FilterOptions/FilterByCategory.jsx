import React from 'react'
import { filterByCategory } from '../../../redux/features/products/productSlice';
import {useDispatch} from 'react-redux'

const FilterByCategory = ({setFilters}) => {



  const handleChange = (e) => {
    const value = e.target.value;
    setFilters((filter) => ({
      ...filter,
      category: [...filter.category, value],
    }));
  }

  return (
    <div className="filter-option-container">
      <label>
        Filter by category
        <select onChange={handleChange}>
          <option>All</option>
          <option>Electronics</option>
          <option>Shoes</option>
          <option>Clothing</option>
          <option>Groceries</option>
          <option>Accesories</option>
        </select>
      </label>
    </div>
  );
};

export default FilterByCategory;