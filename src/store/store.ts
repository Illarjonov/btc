/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';

import { bitcoinSlice } from './bitcoin/slice';

//@todo: fix type
export const store: any = configureStore({
    reducer: {
        [bitcoinSlice.reducerPath]: bitcoinSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
    extra: { s: string; n: number };
}>();
