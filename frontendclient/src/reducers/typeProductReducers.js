import * as typeProductConstant from './../constants/typeProductContant';

export const allTypeProductReducer = (state = {}, action )=> {
  switch(action.type){
    case typeProductConstant.TYPEPRODUCT_GET_ALL_TYPEPRODUCT_REQUEST:
      return {loading: true};
    case typeProductConstant.TYPEPRODUCT_GET_ALL_TYPEPRODUCT_SUCCESS:
      return { loading: false, typeProduct: action.payload};
    case typeProductConstant.TYPEPRODUCT_GET_ALL_TYPEPRODUCT_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const createTypeProductReducer = (state = {}, action )=> {
  switch(action.type){
    case typeProductConstant.TYPEPRODUCT_CREATE_TYPEPRODUCT_REQUEST:
      return {loading: true};
    case typeProductConstant.TYPEPRODUCT_CREATE_TYPEPRODUCT_SUCCESS:
      return { loading: false, message: 'Create TypeProduct Successfully'};
    case typeProductConstant.TYPEPRODUCT_CREATE_TYPEPRODUCT_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const updateTypeProductReducer = (state = {}, action )=> {
  switch(action.type){
    case typeProductConstant.TYPEPRODUCT_UPDATE_TYPEPRODUCT_FROM_ID_REQUEST:
      return {loading: true};
    case typeProductConstant.TYPEPRODUCT_UPDATE_TYPEPRODUCT_FROM_ID_SUCCESS:
      return { loading: false, message: 'Update TypeProduct Successfully'};
    case typeProductConstant.TYPEPRODUCT_UPDATE_TYPEPRODUCT_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const deleteTypeProductReducer = (state = {}, action )=> {
  switch(action.type){
    case typeProductConstant.TYPEPRODUCT_DELETE_TYPEPRODUCT_FROM_ID_REQUEST:
      return {loading: true};
    case typeProductConstant.TYPEPRODUCT_DELETE_TYPEPRODUCT_FROM_ID_SUCCESS:
      return { loading: false, message: 'Delete TypeProduct Successfully'};
    case typeProductConstant.TYPEPRODUCT_DELETE_TYPEPRODUCT_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}