import axios from 'axios';

export const setAuthToken = (token) => {
  axios.defaults.baseURL = 'https://ec2-100-25-10-187.compute-1.amazonaws.com/';
  axios.defaults.headers.common['Authorization'] = token;
};
