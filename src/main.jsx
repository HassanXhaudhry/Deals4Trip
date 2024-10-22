import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './App.css';
import './index.css';
import { store } from './store.js';
import { Provider } from 'react-redux'
import './i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
       <App />
    </Provider>
  </BrowserRouter>,
);
