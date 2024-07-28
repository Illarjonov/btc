import React, { useCallback, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { PAGES } from './shared/configs/pages';
import { useAuthContext } from './contexts/AuthContext';
import Layout from 'components/Layout';
import { useAppDispatch } from 'shared/hooks/redux';
import { getBitcontPrice } from 'store/bitcoin/reducers';
import useInterval from 'shared/hooks/useInterval';

import './styles/global.css';

const PrivateRoute = ({ children }: { children: JSX.Element; }): JSX.Element => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) return;

        navigate(PAGES.login);
    }, [user]);

    return children;
};


const App = () => {
    const dispatch = useAppDispatch();
    const refetchBitcoinPriceDelay = 30 * 1000; // 30 сек из документации coindesk

    const handleFetchBitcoinPrice = useCallback(() => {
        dispatch(getBitcontPrice());
    }, [dispatch]);

    //начать собирать статистику в моменте появления на странице /login
    useInterval(handleFetchBitcoinPrice, refetchBitcoinPriceDelay);

    return (
        <Layout>
            <Routes>
                <Route
                    path={PAGES.home}
                    element={
                        <PrivateRoute>
                            <DashboardPage />
                        </PrivateRoute>
                    }
                />
                <Route path={PAGES.login} element={<LoginPage />} />
            </Routes>
        </Layout>
    );
};

export default App;
