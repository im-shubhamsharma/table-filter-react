import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../utils/data";

// localStorage.setItem("Inventory1", JSON.stringify(data));

const productsData = JSON.parse(localStorage.getItem("Inventory1")) || data;

const initialState = {
  products: productsData,
  filteredProducts: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    /*---------------------------------------
    ----Reducer for adding new product-------
    -----------------------------------------*/
    addNewProduct: (state, action) => {
      const { price, rating } = action.payload;

      const newProduct = {
        ...action.payload,
        id: state.products.length + 1,
        price: parseFloat(price),
        rating: parseFloat(rating),
      };
      console.log(newProduct);
      state.products = [newProduct, ...state.products];
    },

    /*---------------------------------------
    ----Reducer for editing/updatin product-------
    -----------------------------------------*/
    editProduct: (state, action) => {
      let { formData, id } = action.payload;
      const { price, rating } = formData;

      formData = {
        ...formData,
        price: parseFloat(price),
        rating: parseFloat(rating),
      };

      state.products = state.products.map((item) =>
        item.id === id ? formData : item
      );
    },

    /*---------------------------------------
    ----Reducer for deleting product-------
    -----------------------------------------*/
    
    deleteProduct: (state, action) => {
         console.log(action.payload);
         console.log(state.products);
         const id = action.payload;
          
         let index = 0;
         const newProducts = state.products.filter(item => {
             if(item.id !== id){
               let res = { ...item, id: index };
               index++;
               return res;
             }
         })
         state.products = newProducts
    },

    /*----------------------------------------
    --------Reducer for fiter product---------
    ------------------------------------------*/
    filterProductsAll: (state, action) => {
      let filterArray = null;
      // condition to filter products as per category if categorye exist in our filters.
      const category = action.payload.category.toLowerCase();
      if (category && category !== "all") {
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
          filterArray = state.products.filter((item) => item.rating >= rating);
        }
      }

      state.filteredProducts = filterArray;
    },
  },
});

// console.log(productSlice)

export const { addNewProduct,editProduct, deleteProduct, filterProductsAll } = productSlice.actions;
export default productSlice.reducer;
