import React from 'react';
import { useAppSelector } from 'shared/hooks/redux';

import { getBitcoinHistory, getBitcoinIsLoading } from 'store/bitcoin/selectors';
import Heading from 'shared/ui/Heading';

const CurrentBitcoinPrice = () => {
    const bitcoinHistory = useAppSelector(getBitcoinHistory);
    const bitcoinIsLoading = useAppSelector(getBitcoinIsLoading);

    if (bitcoinIsLoading) {
        return <Heading level={5}> Загрузка...</Heading>;
    }

    const currentPrice = bitcoinHistory?.[0]?.bpi?.USD?.rate;
    return <Heading level={5}> Текущая цена: {currentPrice} $</Heading>;
};

const CurrentBitcoinPriceMemo = React.memo(CurrentBitcoinPrice);

export default CurrentBitcoinPriceMemo;