import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 1. Change the import at the top
import { HashRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Change <BrowserRouter> to <HashRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
