import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { PAGES } from './shared/configs/pages';
import { useAuthContext } from './contexts/AuthContext';
import Layout from 'components/Layout';

import './App.css';

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
