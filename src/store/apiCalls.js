import { publicRequest, userRequest } from "../requestMethods";
import { getProductsFailure, getProductsStart, getProductsSuccess } from "./productSlice";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

import {deleteProductsStart, deleteProductsSuccess, deleteProductsFailure} from './productSlice'

export const login = async (dispatch, user)=>{

    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data));
        
    }catch(err){
        dispatch(loginFailure());
    }

}
export const getProducts = async (dispatch)=>{

    dispatch(getProductsStart());

    try{
        const res = await publicRequest.get('/products/')
        dispatch(getProductsSuccess(res.data));
        
    }catch(err){
        dispatch(getProductsFailure());
    }

}
export const deleteProduct = async (id, dispatch)=>{

    dispatch(deleteProductsStart());

    try{
        // const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductsSuccess(id));
        
    }catch(err){
        dispatch(deleteProductsFailure());
    }

}