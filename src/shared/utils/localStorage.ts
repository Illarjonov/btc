import { LOCAL_STORAGE_KEYS } from 'shared/configs/localStorageKeys';

export const getLocalStorage = (name: LOCAL_STORAGE_KEYS): string | null => {
    return localStorage.getItem(name);
};

export const setLocalStorage = (name: LOCAL_STORAGE_KEYS, value: string) => {
    localStorage.setItem(name, value);
};

export const removeLocalStorage = (name: LOCAL_STORAGE_KEYS) => {
    localStorage.removeItem(name);
};