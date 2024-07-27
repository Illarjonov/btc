import { createAsyncThunk, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import type { BitcoinPrice, BitcoinState } from './types';
import { urls } from 'shared/configs/urls';
import { makeRequest } from 'api/makeRequest';
import { HTTPMethod } from 'shared/types/HTTPMethod';

export const getBitcontPrice = createAsyncThunk(
    'bitcoin/getBitcoinPrice',
    async () => {
        try {
            const response = await makeRequest(HTTPMethod.GET, urls.btcCurrentPrice);

            return response as BitcoinPrice;
        } catch (e) {
            throw new Error('Error');
        }
    }
);

export const reducers = {
    addToBitcoinHistory: (state: Draft<BitcoinState>, { payload }: PayloadAction<BitcoinPrice>) => {
        state.bitcoinHistory = [...state.bitcoinHistory, payload];
    },
};
