import Axios from 'axios';
import * as typeProductConstant from './../constants/typeProductContant';
import * as typeProductService from './../services/typeProductService';

export const getAllTypeProduct = () => async(dispatch) => {
  dispatch({ type: typeProductConstant.TYPEPRODUCT_GET_ALL_TYPEPRODUCT_REQUEST});
  try{
    const { data } = await typeProductService.getAllTypeProduct();
    dispatch({type: typeProductConstant.TYPEPRODUCT_GET_ALL_TYPEPRODUCT_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: typeProductConstant.TYPEPRODUCT_GET_ALL_TYPEPRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createTypeProduct = (product) => async(dispatch) => {
  dispatch({ type: typeProductConstant.TYPEPRODUCT_CREATE_TYPEPRODUCT_REQUEST});
  try{
    await typeProductService.createTypeProduct(product);
    dispatch({type: typeProductConstant.TYPEPRODUCT_CREATE_TYPEPRODUCT_SUCCESS});
  }catch(error){
    dispatch({
      type: typeProductConstant.TYPEPRODUCT_CREATE_TYPEPRODUCT_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateTypeProduct = (id, product) => async(dispatch) => {
  dispatch({ type: typeProductConstant.TYPEPRODUCT_UPDATE_TYPEPRODUCT_FROM_ID_REQUEST});
  try{
    await typeProductService.updateTypeProduct(id, product);
    dispatch({type: typeProductConstant.TYPEPRODUCT_UPDATE_TYPEPRODUCT_FROM_ID_SUCCESS});
  }catch(error){
    dispatch({
      type: typeProductConstant.TYPEPRODUCT_UPDATE_TYPEPRODUCT_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteProduct = (id) => async(dispatch) => {
  dispatch({ type: typeProductConstant.TYPEPRODUCT_DELETE_TYPEPRODUCT_FROM_ID_REQUEST});
  try{
    await typeProductService.deleteProduct(id);
    dispatch({type: typeProductConstant.TYPEPRODUCT_DELETE_TYPEPRODUCT_FROM_ID_SUCCESS});
  }catch(error){
    dispatch({
      type: typeProductConstant.TYPEPRODUCT_DELETE_TYPEPRODUCT_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}