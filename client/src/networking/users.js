import axios from 'axios';

const url = '/users';
const localhost = 'http://ec2-52-204-71-158.compute-1.amazonaws.com';

export const login = async (data) => {
  return axios.post(`${localhost}${url}/login`, data);
};
