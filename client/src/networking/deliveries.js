import axios from 'axios';

const url = '/deliveries';
const localhost = 'http://localhost:9090';

export const getDeliveries = async (data) => {
  return axios.get(`${localhost}${url}/data`, data);
};

export const getActualDeliveries = async () => {
  return axios.get(`${localhost}${url}`);
};

export const getUpcomingDeliveries = async () => {
  return axios.get(`${localhost}/upcomingDeliveries`);
};

export const ticket = async (ticketNumber) => {
  return axios.get(`${localhost}${url}/ticket/${ticketNumber}`);
};

export const confirmDepotTicket = async (data) => {
  console.log(data);
  return axios.post(`${localhost}${url}/confirm`, data);
};

export const checkCreate = async (data) => {
  return axios.post(`${localhost}${url}/checkCreate`, data);
};

export const deliveries = async (data) => {
  return axios.post(`${localhost}${url}`, data);
};
