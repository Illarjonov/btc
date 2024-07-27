import React, { useCallback } from 'react';

import useInterval from 'shared/hooks/useInterval';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import { getBitcontPrice } from 'store/bitcoin/reducers';
import { getBitcoinHistory } from 'store/bitcoin/selectors';

const DashboardPage = () => {

    const dispatch = useAppDispatch();

    const bitcoinHistory = useAppSelector(getBitcoinHistory);

    const handleFetchBitcoinPrice = useCallback(() => {
        dispatch(getBitcontPrice());
    }, [dispatch]);

    useInterval(handleFetchBitcoinPrice, 5000);

    console.log(bitcoinHistory);

    return (<>
        123
    </>);
};

export default DashboardPage;