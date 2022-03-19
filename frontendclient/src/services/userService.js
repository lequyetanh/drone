import axios from 'axios';
import * as config from './url';

export function userSignIn(data) {
  return axios({
      url: `${config.USER_URL}/signin`,
      method: 'POST',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function userLogIn(data) {
  // console.log(data)
  return axios({
      url: `${config.USER_URL}/login`,
      method: 'POST',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function userLogOut(data) {
  return axios.get(`${config.USER_URL}/logout`, data)
  .catch(error => {
    console.log(error)
  })
};

export function getAllUser() {
  return axios({
      url: `${config.USER_URL}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function getUserFromToken(data) {
  // console.log(data)
  // return axios({
  //     url: `${config.USER_URL}/checkUser`,
  //     method: 'GET',
  //     data
  // }).catch(err => {
  //     console.log(err);
  // })
  return axios.get(`${config.USER_URL}/checkUser`, data)
  .catch(error => {
    console.log(error)
  })
  ;
};

export function updateUser(id,data) {
  console.log(data)
  return axios({
      url: `${config.USER_URL}/update/${id}`,
      method: 'PUT',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function deleteUser(id) {
  return axios({
      url: `${config.USER_URL}/delete/${id}`,
      method: 'Delete',
  }).catch(err => {
      console.log(err);
  })
};
