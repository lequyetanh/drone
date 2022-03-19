import axios from 'axios';
import * as config from './url';

export function getAllDrone() {
  return axios({
      url: `${config.DRONE_URL}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function getDroneFromId(id) {
  return axios({
      url: `${config.DRONE_URL}/${id}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function createDrone(data) {
  return axios({
      url: `${config.DRONE_URL}/create`,
      method: 'POST',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function updateDrone(id,data) {
  console.log(data)
  return axios({
      url: `${config.DRONE_URL}/update/${id}`,
      method: 'PUT',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function deleteDrone(id) {
  return axios({
      url: `${config.DRONE_URL}/delete/${id}`,
      method: 'Delete'
  }).catch(err => {
      console.log(err);
  })
};
