import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {palavras} from "./palavras.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App palavras={palavras}/>
  </React.StrictMode>
);

