import Axios from 'axios';
import * as productConstant from './../constants/productConstant';
import * as productService from './../services/productService';

export const getAllProduct = (page, direction, id) => async(dispatch) => {
  console.log(page, direction, id)
  dispatch({ type: productConstant.PRODUCT_GET_ALL_REQUEST});
  try{
    const { data } = await productService.getAllProduct(page, direction, id);
    // console.log(data)
    dispatch({type: productConstant.PRODUCT_GET_ALL_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_ALL_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getAllProductSearch = () => async(dispatch) => {
  // console.log()
  dispatch({ type: productConstant.PRODUCT_GET_ALL_REQUEST});
  try{
    const { data } = await productService.getAllProductSearch();
    // console.log(data)
    dispatch({type: productConstant.PRODUCT_GET_ALL_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_ALL_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getProductsFromTypeProduct = (typeProduct, page, direction, id) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_REQUEST});
  try{
    const { data } = await productService.getProductsFromTypeProduct(typeProduct, page, direction, id);
    // console.log(data)
    dispatch({type: productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getProductsFromSearch = (search) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_PRODUCT_FROM_SEARCH_REQUEST});
  try{
    const { data } = await productService.getProductsFromSearch(search);
    // console.log(data)
    dispatch({type: productConstant.PRODUCT_GET_PRODUCT_FROM_SEARCH_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_PRODUCT_FROM_SEARCH_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}


export const getProductFromId = (id) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_PRODUCT_FROM_ID_REQUEST});
  try{
    const { data } = await productService.getProductFromId(id);
    // console.log(data)
    dispatch({type: productConstant.PRODUCT_GET_PRODUCT_FROM_ID_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_PRODUCT_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const get8TopProduct = () => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_8_TOP_PRODUCT_REQUEST});
  try{
    const { data } = await productService.get8TopProduct();
    dispatch({type: productConstant.PRODUCT_GET_8_TOP_PRODUCT_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_8_TOP_PRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const get8NewProduct = () => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_GET_8_NEW_PRODUCT_REQUEST});
  try{
    const { data } = await productService.get8NewProduct();
    dispatch({type: productConstant.PRODUCT_GET_8_NEW_PRODUCT_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_8_NEW_PRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const get8ProductRelative = (typeProduct, id) => async(dispatch) => {
  console.log("ahihi")
  dispatch({ type: productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_REQUEST});
  try{
    const { data } = await productService.get8ProductRelative(typeProduct, id);
    console.log(data)
    dispatch({type: productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createProduct = (product) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_CREATE_PRODUCT_REQUEST});
  try{
    await productService.createProduct(product);
    dispatch({type: productConstant.PRODUCT_CREATE_PRODUCT_SUCCESS});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_CREATE_PRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateProduct = (id, product) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_REQUEST});
  try{
    await productService.updateProduct(id, product);
    dispatch({type: productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_SUCCESS});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteProduct = (id) => async(dispatch) => {
  dispatch({ type: productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_REQUEST});
  try{
    await productService.deleteProduct(id);
    dispatch({type: productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_SUCCESS});
  }catch(error){
    dispatch({
      type: productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

