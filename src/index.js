import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {palavras} from "./palavras.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
const palavra = palavras[Math.floor(Math.random() * palavras.length)]
const letras_palavra = [...palavra]
root.render(
  <React.StrictMode>
  <App letras_palavra={letras_palavra}/>
  </React.StrictMode>
);

