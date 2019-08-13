import axios from 'axios';
import config from '../config';

export const getApiCall = (url, method = 'GET') => axios.create({
  method,
  baseURL: `https://${config.apiHost}/${url}`,
  headers: {
    'X-RapidAPI-Host': config.apiHost,
    'X-RapidAPI-Key': config.apiKey,
  },
  params: {
    json: true,
  },
});
