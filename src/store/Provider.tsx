import React, { useRef } from 'react';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from './store';
import { getBitcontPrice } from './bitcoin/reducers';

export default function StoreProvider({ children }: { children: ReactNode }) {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
        //здесь можно запросить и засетить какие-то предварительные значения c сервера через storeRef.current.dispatch()
        storeRef.current.dispatch(getBitcontPrice());
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
