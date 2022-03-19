import * as productConstant from './../constants/productConstant';

export const newProductReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_GET_8_NEW_PRODUCT_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_GET_8_NEW_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload};
    case productConstant.PRODUCT_GET_8_NEW_PRODUCT_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const topProductReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_GET_8_TOP_PRODUCT_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_GET_8_TOP_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload};
    case productConstant.PRODUCT_GET_8_TOP_PRODUCT_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const productRelativeReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_SUCCESS:
      return { loading: false, product: action.payload};
    case productConstant.PRODUCT_GET_8_PRODUCT_RELATIVE_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const productFromTypeProductReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_SUCCESS:
      return { loading: false, product: action.payload};
    case productConstant.PRODUCT_GET_PRODUCT_FROM_TYPEPRODUCT_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const productFromIdReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_GET_PRODUCT_FROM_ID_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_GET_PRODUCT_FROM_ID_SUCCESS:
      return { loading: false, product: action.payload};
    case productConstant.PRODUCT_GET_PRODUCT_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const allProductReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_GET_ALL_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_GET_ALL_SUCCESS:
      return { loading: false, product: action.payload};
    case productConstant.PRODUCT_GET_ALL_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const createProductReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_CREATE_PRODUCT_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_CREATE_PRODUCT_SUCCESS:
      return { loading: false, message: 'Create Product Successfully'};
    case productConstant.PRODUCT_CREATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const updatedProductReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_SUCCESS:
      return { loading: false, message: 'Update Product Successfully'};
    case productConstant.PRODUCT_UPDATE_PRODUCT_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const deleteProductReducer = (state = {}, action )=> {
  switch(action.type){
    case productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_REQUEST:
      return {loading: true};
    case productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_SUCCESS:
      return { loading: false, message: 'Delete Product Successfully'};
    case productConstant.PRODUCT_DELETE_PRODUCT_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}