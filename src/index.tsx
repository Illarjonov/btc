import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@mui/material/styles';

import App from './App';

import StoreProvider from 'store/Provider';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';

const theme = unstable_createMuiStrictModeTheme();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <StoreProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </StoreProvider>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);

