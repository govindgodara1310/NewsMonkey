// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ way
import App from './App';
import './index.css'; // Optional, only if you use a global stylesheet

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
