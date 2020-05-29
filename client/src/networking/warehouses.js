import axios from 'axios';

const url = '/warehouses';
const localhost = 'https://ec2-52-204-71-158.compute-1.amazonaws.com';

export const warehouses = async (data) => {
  return axios.get(`${localhost}${url}`, data);
};
