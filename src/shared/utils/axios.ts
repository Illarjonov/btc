import axios from 'axios';

import { baseURL } from 'shared/configs/urls';
import { HTTPMethod } from 'shared/types/HTTPMethod';

const axiosInstance = axios.create({
  baseURL: baseURL
});

export const makeRequest = async (method: HTTPMethod, url: string, data?: any) => {
  try {
    const response = await axiosInstance[method](url, data);
    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error;
  }
};