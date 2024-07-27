import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';

import { bitcoinSlice } from './bitcoin/slice';
import thunk from 'redux-thunk'; // или другой middleware

export const makeStore = (): any =>
    configureStore({
        reducer: {
            [bitcoinSlice.reducerPath]: bitcoinSlice.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
    extra: { s: string; n: number };
}>();
