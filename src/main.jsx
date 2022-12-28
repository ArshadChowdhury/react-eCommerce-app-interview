import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


// Here the App component is being rendered in the browser and we have most of the functionality in the App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
