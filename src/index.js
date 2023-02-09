import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartcontextProvider } from "./Createcontext";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartcontextProvider>
      <App />
    </CartcontextProvider>

  </React.StrictMode>
);

