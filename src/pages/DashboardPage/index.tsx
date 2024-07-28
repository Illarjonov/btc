import React from 'react';

import GridContainer from 'shared/ui/GridContainer';
import GridItem from 'shared/ui/GridItem';
import HistoryBitcoinPricesTableMemo from './components/HistoryBitcoinPricesTable';
import CurrentBitcoinPriceMemo from './components/CurrentBitcoinPrice';

import styles from './styles.module.css';

const DashboardPage = () => {
    return (
        <GridContainer className={styles.container}>
            <GridItem span={12} alignX="center" alignY="center">
                <CurrentBitcoinPriceMemo />
            </GridItem>
            <GridItem span={12} alignX="center" alignY="center">
                <HistoryBitcoinPricesTableMemo />
            </GridItem>
        </GridContainer>
    );
};

export default DashboardPage;