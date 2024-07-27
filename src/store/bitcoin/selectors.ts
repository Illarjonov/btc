import { RootState } from 'store/store';
import { BitcoinPrice, BitcoinState } from './types';
import { STATE_KEY } from './key';

const getBitcoinState = (state: RootState): BitcoinState => state[STATE_KEY];
export const getBitcoinHistory = (state: RootState): BitcoinPrice[] => getBitcoinState(state).bitcoinHistory;
export const getBitcoinIsLoading = (state: RootState): boolean => getBitcoinState(state).isLoading;
export const getBitcoinError = (state: RootState): string | null => getBitcoinState(state).error;