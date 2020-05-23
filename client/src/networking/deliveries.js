import axios from 'axios';

const url = '/deliveries';
const localhost = 'http://localhost:9090';

export const deliveries = async (data) => {
  return axios.get(`${localhost}${url}/getDataForCreateJob`, data);
};
