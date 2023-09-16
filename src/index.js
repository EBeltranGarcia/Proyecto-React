import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Home from './Paginas/home';
import reportWebVitals from './reportWebVitals';

//import Characters from './Paginas/characters';
import Contacto from './Paginas/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contacto />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
