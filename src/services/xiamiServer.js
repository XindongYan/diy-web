import request from '../utils/request';

export function getGoods(params) {
  return request(`/api/getGoods1?type=${params}`, {
    method: 'GET'
  });
}

export function getText(params) {
  return request(`/api/getText1?type=0`)
}
