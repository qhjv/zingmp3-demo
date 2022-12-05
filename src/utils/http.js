import axios from 'axios';
import { BASE_URL } from '../constants';

const axiosApiInstance = axios.create({
  baseURL: BASE_URL + '/api',
});
axiosApiInstance.defaults.timeout = 60000;

axiosApiInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => Promise.reject(error)
);

axiosApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      return;
    }

    return Promise.reject(error);
  }
);

export default axiosApiInstance;
