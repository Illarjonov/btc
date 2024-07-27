import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StoreProvider from 'store/Provider';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider>
        <BrowserRouter>
            <StoreProvider>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </AuthProvider>
);

