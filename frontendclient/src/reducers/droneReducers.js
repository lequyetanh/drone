import * as droneConstant from './../constants/droneConstant';

export const allDroneReducer = (state = {}, action )=> {
  switch(action.type){
    case droneConstant.DRONE_GET_ALL_DRONE_REQUEST:
      return {loading: true};
    case droneConstant.DRONE_GET_ALL_DRONE_SUCCESS:
      return { loading: false, allDrone: action.payload};
    case droneConstant.DRONE_GET_ALL_DRONE_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const droneFromId = (state = {}, action )=> {
  switch(action.type){
    case droneConstant.DRONE_GET_DRONE_FROM_ID_REQUEST:
      return {loading: true};
    case droneConstant.DRONE_GET_DRONE_FROM_ID_SUCCESS:
      return { loading: false, drone: action.payload};
    case droneConstant.DRONE_GET_DRONE_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const createDroneReducer = (state = {}, action )=> {
  switch(action.type){
    case droneConstant.DRONE_CREATE_DRONE_REQUEST:
      return {loading: true};
    case droneConstant.DRONE_CREATE_DRONE_SUCCESS:
      return { loading: false, message: 'Create Drone Successfully'};
    case droneConstant.DRONE_CREATE_DRONE_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const updateDroneReducer = (state = {}, action )=> {
  switch(action.type){
    case droneConstant.DRONE_UPDATE_DRONE_FROM_ID_REQUEST:
      return {loading: true};
    case droneConstant.DRONE_UPDATE_DRONE_FROM_ID_SUCCESS:
      return { loading: false, message: 'Update Drone Successfully'};
    case droneConstant.DRONE_UPDATE_DRONE_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}

export const deleteDroneReducer = (state = {}, action )=> {
  switch(action.type){
    case droneConstant.DRONE_DELETE_DRONE_FROM_ID_REQUEST:
      return {loading: true};
    case droneConstant.DRONE_DELETE_DRONE_FROM_ID_SUCCESS:
      return { loading: false, message: 'Delete Drone Successfully'};
    case droneConstant.DRONE_DELETE_DRONE_FROM_ID_FAIL:
      return { loading: false, error: action.payload};
    default:
      return state;
  }
}