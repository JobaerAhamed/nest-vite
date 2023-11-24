import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
