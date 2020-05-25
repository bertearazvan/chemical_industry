import axios from 'axios';

const url = '/deliveries';
const localhost = 'http://localhost:9090';

export const getDeliveries = async (data) => {
  return axios.get(`${localhost}${url}/data`, data);
};

export const ticket = async (ticketNumber) => {
  return axios.get(`${localhost}${url}/ticket/${ticketNumber}`);
};

export const checkCreate = async (data) => {
  return axios.post(`${localhost}${url}/checkCreate`, data);
};
