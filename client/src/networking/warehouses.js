import axios from 'axios';

const url = '/warehouses';
const localhost = 'http://localhost:9090';

export const warehouses = async (data) => {
  return axios.get(`${localhost}${url}`, data);
};
