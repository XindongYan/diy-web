import request from '../utils/request';

export function getGoods(params) {
  return request(`/api/getGoods?type=${params}`, {
    method: 'GET'
  });
}
