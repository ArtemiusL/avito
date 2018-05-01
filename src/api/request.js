import axios from 'axios';

const universalRequest = (url, params, type, method) => (
  axios({
    method,
    url,
    headers: {
      'Content-Type': type,
    },
    data: params,
  }).catch(error => (error.response.data)));

const requestFn = method => (url, params = {}, type = 'application/json') => universalRequest(url, params, type, method);

export const getRequest = requestFn('get');
export const postRequest = requestFn('post');
export const putRequest = requestFn('put');
export const deleteRequest = requestFn('delete');
export const patchRequest = requestFn('patch');
