import React, { useMemo } from 'react';
import { useAppSelector } from 'shared/hooks/redux';

import Table from 'shared/ui/Table/Table';
import { getBitcoinHistory } from 'store/bitcoin/selectors';
import { BPI } from 'store/bitcoin/types';
import { formatDate } from 'shared/utils/date';
import type { TableColumn, TableRowData } from 'shared/ui/Table/types';

import styles from './styles.module.css';

const HistoryBitcoinPricesTable = () => {
    const bitcoinHistory = useAppSelector(getBitcoinHistory);

    const columns: TableColumn[] = [
        { key: 'date', name: 'Дата' },
        { key: BPI.USD, name: BPI.USD },
        { key: BPI.EUR, name: BPI.EUR },
        { key: BPI.GBP, name: BPI.GBP },
    ];

    const data: TableRowData[] = useMemo(() => {
        return bitcoinHistory
            .map(({ time, bpi }) => ({
                date: formatDate(time.updated),
                [BPI.USD]: bpi.USD.rate,
                [BPI.EUR]: bpi.EUR.rate,
                [BPI.GBP]: bpi.GBP.rate,
            }));
    }, [bitcoinHistory]);

    return <Table columns={columns} data={data} className={styles.table} />;
};

const HistoryBitcoinPricesTableMemo = React.memo(HistoryBitcoinPricesTable);

export default HistoryBitcoinPricesTableMemo;