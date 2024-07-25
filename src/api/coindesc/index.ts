import { urls } from 'shared/configs/urls';
import { makeRequest } from 'shared/utils/axios';
import { HTTPMethod } from 'shared/types/HTTPMethod';
import { BitcoinPriceResponse } from './types';


export const fetchCurrentBitcoinPrice = async (): Promise<BitcoinPriceResponse> => {
    try {
        const response = await makeRequest(HTTPMethod.GET, urls.btcCurrentPrice);

        return response as BitcoinPriceResponse;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        throw error;
    }
};