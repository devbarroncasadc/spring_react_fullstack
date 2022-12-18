import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

import axios from 'axios';

axios.defaults.headers.common['Accept-Language'] = "en";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
