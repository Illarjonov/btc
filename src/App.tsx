import React, { useCallback } from 'react';
import './App.css';
import useInterval from 'shared/hooks/useInterval';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { getBitcontPrice } from 'store/bitcoin/reducers';
import { getBitcoinHistory } from 'store/bitcoin/selectors';
import useBitcoinData from 'shared/helpers/useBitcoinData';

const App = () => {
    const dispatch = useAppDispatch();

    const bitcoinHistory = useAppSelector(getBitcoinHistory);

    const handleFetchBitcoinPrice = useCallback(() => {
        dispatch(getBitcontPrice());
    }, [dispatch]);

    useInterval(handleFetchBitcoinPrice, 5000);

    console.log(bitcoinHistory);
    return (
        <div className="App">
            {/* {data.bpi.EUR.rate} */}
        </div>
    );
};

export default App;
