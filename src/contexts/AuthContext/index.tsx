import React, { createContext, useState, useCallback, useContext } from 'react';

import { LOCAL_STORAGE_KEYS } from 'shared/configs/localStorageKeys';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from 'shared/utils/localStorage';

type User = {
    login: string;
    name: string;
}

type AuthContextType = {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

//В useAuthContext проверка, поэтому можно оставить {}
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');

    }

    return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser]
        = useState<User | null>(() => {
            const storedUser = getLocalStorage(LOCAL_STORAGE_KEYS.user);
            return storedUser ? JSON.parse(storedUser) : null;
        });

    const login = useCallback((user: User) => {
        setLocalStorage(LOCAL_STORAGE_KEYS.user, JSON.stringify(user));
        setUser(user);
    }, []);

    const logout = useCallback(() => {
        removeLocalStorage(LOCAL_STORAGE_KEYS.user);
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext, AuthProvider,
    useAuthContext
};