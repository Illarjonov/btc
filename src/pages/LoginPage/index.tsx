import { useAuthContext } from 'contexts/AuthContext';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES } from 'shared/configs/pages';

const LoginPage = () => {
    const { user, login } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;

        navigate(PAGES.home);

    }, [user]);

    const handleLogin = () => {
        login({ login: 'test', name: 'test' });
    };

    return (
        <div>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default LoginPage;