import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://data.messari.io/api/v1/assets/',
});
export default axiosInstance;
