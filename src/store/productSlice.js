import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL PRODUCTS
    getProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products = action.payload;
    },
    getProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE PRODUCTS
    deleteProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload)
      );
    },
    deleteProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // Update/EDIT PRODUCTS
    updateProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload._id)
      ] = action.payload.product;
    },
    updateProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // ADD/ CREATE PRODUCTS
    createProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products.push(action.payload)
    },
    createProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  deleteProductsStart,
  deleteProductsSuccess,
  deleteProductsFailure,
  updateProductsStart,
  updateProductsSuccess,
  updateProductsFailure,
  createProductsStart,
  createProductsSuccess,
  createProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
