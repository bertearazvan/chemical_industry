import axios from 'axios';

export const setAuthToken = (token) => {
  axios.defaults.baseURL = 'https://ec2-52-204-71-158.compute-1.amazonaws.com/';
  axios.defaults.headers.common['Authorization'] = token;
};
