import { publicRequest, userRequest } from '../requestMethods';
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from './productSlice';
import { loginFailure, loginStart, loginSuccess, logout } from './userSlice';

import {
  deleteProductsStart,
  deleteProductsSuccess,
  deleteProductsFailure,
  updateProductsStart,
  updateProductsSuccess,
  updateProductsFailure,
  createProductsStart,
  createProductsSuccess,
  createProductsFailure,
} from './productSlice';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logoutCall = async (dispatch) => {
  dispatch(logout());
};
export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());

  try {
    const res = await publicRequest.get('/products/');
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    dispatch(getProductsFailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductsStart());

  try {
    // const res = await userRequest.delete(`/products/${id}`)
    dispatch(deleteProductsSuccess(id));
  } catch (err) {
    dispatch(deleteProductsFailure());
  }
};
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductsStart());

  try {
    //Update
    const res = await userRequest.put(`/products/update/${id}`, product);
    dispatch(updateProductsSuccess({ id: id, product: res.data }));
  } catch (err) {
    dispatch(updateProductsFailure());
  }
};
export const createProduct = async (product, dispatch) => {
  dispatch(createProductsStart());

  try {
    const res = await userRequest.post(`/products/create`, product);
    dispatch(createProductsSuccess(res.data));
  } catch (err) {
    dispatch(createProductsFailure());
  }
};
