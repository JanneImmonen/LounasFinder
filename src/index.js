import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS globally
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import any global contexts if you have them
// import { MyGlobalContextProvider } from './context/MyGlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Wrap <App /> in providers as necessary
  // <MyGlobalContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </MyGlobalContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
