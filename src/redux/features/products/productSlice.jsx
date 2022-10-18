import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../utils/data";

const initialState = {
  products: data,
  filteredProducts: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProductsAll: (state, action) => {
      let filterArray = null;
      // condition to filter products as per category if categorye exist in our filters.
      const category = action.payload.category.toLowerCase();
      if (category) {
        filterArray = state.products.filter(
          (item) => item.category == category
        );
      }

      // condition to filter products as per color
      const color = action.payload.color;
      if (color.length > 0) {
        if (filterArray !== null) {
          filterArray = filterArray.filter((item) =>
            color.includes(item.color)
          );
        } else {
          filterArray = state.products.filter((item) =>
            color.includes(item.color)
          );
        }
      }

      // condition to filter products as per color
      const price = parseInt(action.payload.price);
      if (price) {
        if (filterArray !== null) {
          filterArray = filterArray.filter((item) => item.price <= price);
        } else {
          filterArray = state.products.filter((item) => item.price <= price);
        }
      }

      // condition to filter products as per color
      const rating = action.payload.rating;
        if (rating) {
          if (filterArray !== null) {
            filterArray = filterArray.filter((item) => item.rating >= rating);
          } else {
            filterArray = state.products.filter(
              (item) => item.rating >= rating
            );
          }
        }



      state.filteredProducts = filterArray;
    },
  },
});

// console.log(productSlice)

export const { filterProductsAll } = productSlice.actions;
export default productSlice.reducer;
