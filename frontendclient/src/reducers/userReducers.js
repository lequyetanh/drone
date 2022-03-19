import * as userConstant from './../constants/userConstant';

export const userInforReducer = (state = {}, action )=> {
  switch(action.type){
    case userConstant.USER_GET_USER_FROM_TOKEN_REQUEST:
      return {loading: true};
    case userConstant.USER_GET_USER_FROM_TOKEN_SUCCESS:
      return { loading: false, userInfor: action.payload, login: true};
    case userConstant.USER_GET_USER_FROM_TOKEN_FAIL:
      return { loading: false, error: action.payload};

    case userConstant.USER_UPDATE_USER_FROM_ID_REQUEST:
      return {loading: true};
    case userConstant.USER_UPDATE_USER_FROM_ID_SUCCESS:
      return { loading: false, userInfor: action.payload, login: true};
    case userConstant.USER_UPDATE_USER_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
      
    case userConstant.USER_LOGIN_REQUEST:
      return {loading: true};
    case userConstant.USER_LOGIN_SUCCESS:
      return { loading: false, userInfor: action.payload, login: true};
    case userConstant.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload};

    case userConstant.USER_LOGOUT_REQUEST:
      return {loading: true};
    case userConstant.USER_LOGOUT_SUCCESS:
      return { loading: false, login: false};
    case userConstant.USER_LOGOUT_FAIL:
      return { loading: false, error: action.payload};

    default:
      return state;
  }
}

export const allUserReducer = (state = {}, action )=> {
  switch(action.type){
    case userConstant.USER_GET_ALL_USER_REQUEST:
      return {loading: true};
    case userConstant.USER_GET_ALL_USER_SUCCESS:
      return { loading: false, allUser: action.payload};
    case userConstant.USER_GET_ALL_USER_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const userSignInReducer = (state = {}, action )=> {
  switch(action.type){
    case userConstant.USER_SIGNIN_REQUEST:
      return {loading: true};
    case userConstant.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfor: action.payload ,signin: true};
    case userConstant.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const deleteUserReducer = (state = {}, action )=> {
  switch(action.type){
    case userConstant.USER_DELETE_USER_FROM_ID_REQUEST:
      return {loading: true};
    case userConstant.USER_DELETE_USER_FROM_ID_SUCCESS:
      return { loading: false, message: 'Delete User Successfully'};
    case userConstant.USER_DELETE_USER_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}
