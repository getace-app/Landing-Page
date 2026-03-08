import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const firebaseConfig = {
    apiKey: 'AIzaSyDY8zgYzxBlEvOlfjiQihJV090yWU3HEDc',
    authDomain: 'ace-func.firebaseapp.com',
    projectId: 'ace-func',
    storageBucket: 'ace-func.appspot.com',
    messagingSenderId: '189311020888',
    appId: '1:189311020888:web:edcc103b302423faeeff2d',
    measurementId: 'G-HJQ2H7S08Y',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics, 'screen_view');

function downloadedAppEvent(e: Event) {
    const tag = (e.target as HTMLElement).getAttribute('data-value');
    if (tag) {
        logEvent(analytics, tag);
    }
}

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

const root = ReactDOM.createRoot(rootEl);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App downloadedAppEvent={downloadedAppEvent} />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
