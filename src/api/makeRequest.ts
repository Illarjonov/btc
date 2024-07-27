
import { HTTPMethod } from 'shared/types/HTTPMethod';
import { axiosInstance } from './axiosInstance';

export const makeRequest = async (method: HTTPMethod, url: string, data?: Record<string, unknown>) => {
    try {
        const response = await axiosInstance[method](url, data);
        return response.data;
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
};