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
    //reducer to filter by category
    filterByCategory: (state, action) => {
      const category = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter((item) =>
        category === "all" ? item : item.category === category
      );
    },

    //reducer to filter by category
    filterByColor: (state, action) => {
      const color = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(
        (item) => item.color === color
      );
    },
  },
});

// console.log(productSlice)

export const { filterByCategory, filterByColor } = productSlice.actions;
export default productSlice.reducer;
