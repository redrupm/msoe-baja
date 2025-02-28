import React from 'react';
import ReactDOM from 'react-dom/client';
import './baja-site/src/index.css';
import App from './baja-site/src/Components/App';
import reportWebVitals from './baja-site/src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
