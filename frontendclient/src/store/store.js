import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as userReducer from './../reducers/userReducers';
import * as productReducer from './../reducers/productReducers';
import * as typeProductReducer from './../reducers/typeProductReducers';
import * as droneReducer from './../reducers/droneReducers';

const reducer = combineReducers({
  userInfor: userReducer.userInforReducer,
  userSignIn: userReducer.userSignInReducer,
  userDelete: userReducer.deleteUserReducer,
  allUser: userReducer.allUserReducer,

  newProduct: productReducer.newProductReducer,
  topProduct: productReducer.topProductReducer,
  productRelative: productReducer.productRelativeReducer,
  productFromId: productReducer.productFromIdReducer,
  productFromTypeProduct: productReducer.productFromTypeProductReducer,
  allProduct: productReducer.allProductReducer,
  createProduct: productReducer.createProductReducer,
  updateProduct: productReducer.updatedProductReducer,
  deleteProduct: productReducer.deleteProductReducer,

  allTypeProduct: typeProductReducer.allTypeProductReducer,
  createTypeProduct: typeProductReducer.createTypeProductReducer,
  updateTypeProduct: typeProductReducer.updateTypeProductReducer,
  deleteTypeProduct: typeProductReducer.deleteTypeProductReducer,

  allDrone: droneReducer.allDroneReducer,
  droneFromId: droneReducer.droneFromId,
  createDrone: droneReducer.createDroneReducer,
  updateDrone: droneReducer.updateDroneReducer,
  deleteDrone: droneReducer.deleteDroneReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;