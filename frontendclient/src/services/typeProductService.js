import axios from 'axios';
import * as config from './url';

export function getAllTypeProduct() {
  return axios({
      url: `${config.TYPEPRODUCT_URL}`,
      method: 'GET',
  }).catch(err => {
      console.log(err);
  })
};

export function createTypeProduct(data) {
  return axios({
      url: `${config.TYPEPRODUCT_URL}/create`,
      method: 'POST',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function updateTypeProduct(id,data) {
  return axios({
      url: `${config.TYPEPRODUCT_URL}/update/${id}`,
      method: 'PUT',
      data
  }).catch(err => {
      console.log(err);
  })
};

export function deleteProduct(id) {
  return axios({
      url: `${config.TYPEPRODUCT_URL}/delete/${id}`,
      method: 'Delete'
  }).catch(err => {
      console.log(err);
  })
};
