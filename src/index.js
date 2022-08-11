import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { BrowserRouter } from 'react-router-dom';
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <BrowserRouter basename={baseUrl}>
            <App />
</BrowserRouter>

);