import axios from 'axios';

const url = '/users';
const localhost = 'http://ec2-100-25-10-187.compute-1.amazonaws.com';

export const login = async (data) => {
  return axios.post(`${localhost}${url}/login`, data);
};
