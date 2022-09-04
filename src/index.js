import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {initializeApp} from "firebase/app";
import {getAnalytics, logEvent} from "firebase/analytics";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY8zgYzxBlEvOlfjiQihJV090yWU3HEDc",
    authDomain: "ace-func.firebaseapp.com",
    projectId: "ace-func",
    storageBucket: "ace-func.appspot.com",
    messagingSenderId: "189311020888",
    appId: "1:189311020888:web:edcc103b302423faeeff2d",
    measurementId: "G-HJQ2H7S08Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// log screen view
logEvent(analytics, 'screen_view');

function downloadedAppEvent(e){
    const tag = e.target.getAttribute('data-value')
    logEvent(analytics, tag)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App downloadedAppEvent={downloadedAppEvent}/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
