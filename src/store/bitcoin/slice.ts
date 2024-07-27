import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';

import { getBitcontPrice, reducers } from './reducers';
import { BitcoinState } from './types';
import { STATE_KEY } from './key';
import * as selectors from './selectors';


const initialState: BitcoinState = {
    bitcoinHistory: [],
    isLoading: false,
    error: '',
};

export const bitcoinSlice = createSlice({
    name: STATE_KEY,
    initialState,
    reducers,
    extraReducers(builder: ActionReducerMapBuilder<BitcoinState>) {
        builder.addCase(getBitcontPrice.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.bitcoinHistory = [...state.bitcoinHistory, payload];
            state.error = '';
        });
        builder.addCase(getBitcontPrice.pending, (state) => {
            state.error = '';
            state.isLoading = true;
        });
        builder.addCase(getBitcontPrice.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action?.error?.message || 'Error';
        });
    },
    selectors,
});

export const { addToBitcoinHistory } = bitcoinSlice.actions;
export default bitcoinSlice.reducer;
