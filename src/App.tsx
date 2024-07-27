import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import DashboardPage from 'pages/DashboardPage';
import { PAGES } from 'shared/configs/pages';
import { useAuthContext } from 'contexts/AuthContext';

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
        <div className="App">
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
        </div>
    );
};

export default App;
