import Axios from 'axios';
import * as droneConstant from '../constants/droneConstant';
import * as droneService from '../services/droneService';

export const getAllDrone = () => async(dispatch) => {
  dispatch({ type: droneConstant.DRONE_GET_ALL_DRONE_REQUEST});
  try{
    const { data } = await droneService.getAllDrone();
    dispatch({type: droneConstant.DRONE_GET_ALL_DRONE_SUCCESS, payload: data});
  }catch(error){
    dispatch({
      type: droneConstant.DRONE_GET_ALL_DRONE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getDroneFromId = (id) => async(dispatch) => {
  dispatch({ type: droneConstant.DRONE_GET_DRONE_FROM_ID_REQUEST});
  try{
    await droneService.getDroneFromId(id);
    dispatch({type: droneConstant.DRONE_GET_DRONE_FROM_ID_SUCCESS});
  }catch(error){
    dispatch({
      type: droneConstant.DRONE_GET_DRONE_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createDrone = (drone) => async(dispatch) => {
  dispatch({ type: droneConstant.DRONE_CREATE_DRONE_REQUEST});
  try{
    await droneService.createDrone(drone);
    dispatch({type: droneConstant.DRONE_CREATE_DRONE_SUCCESS});
  }catch(error){
    dispatch({
      type: droneConstant.DRONE_CREATE_DRONE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateDrone = (id, drone) => async(dispatch) => {
  dispatch({ type: droneConstant.DRONE_UPDATE_DRONE_FROM_ID_REQUEST});
  try{
    await droneService.updateDrone(id, drone);
    dispatch({type: droneConstant.DRONE_UPDATE_DRONE_FROM_ID_SUCCESS});
  }catch(error){
    dispatch({
      type: droneConstant.DRONE_UPDATE_DRONE_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteDrone = (id) => async(dispatch) => {
  dispatch({ type: droneConstant.DRONE_DELETE_DRONE_FROM_ID_REQUEST});
  try{
    await droneService.deleteDrone(id);
    dispatch({type: droneConstant.DRONE_DELETE_DRONE_FROM_ID_SUCCESS});
  }catch(error){
    dispatch({
      type: droneConstant.DRONE_DELETE_DRONE_FROM_ID_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}