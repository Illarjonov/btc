import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux';
import useInterval from 'shared/hooks/useInterval';
import { getBitcontPrice } from 'store/bitcoin/reducers';
import { getBitcoinError, getBitcoinHistory, getBitcoinIsLoading } from 'store/bitcoin/selectors';


const useBitcoinData = () => {
    const dispatch = useAppDispatch();
    const bitcoinHistory = useAppSelector(getBitcoinHistory);
    const isLoading = useAppSelector(getBitcoinIsLoading);
    const error = useAppSelector(getBitcoinError);

    const handleFetchBitcoinPrice = useCallback(() => {
        dispatch(getBitcontPrice());
    }, [dispatch]);

    useInterval(handleFetchBitcoinPrice, 5000);

    // Используйте useMemo для оптимизации зависимостей, если необходимо
    const memoizedData = useMemo(() => ({
        bitcoinHistory,
        isLoading,
        error,
    }), [bitcoinHistory, isLoading, error]);

    return memoizedData;
};

export default useBitcoinData;
