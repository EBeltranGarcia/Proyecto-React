//hoja de estilos
import './index.css';
//paquetes-modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
//componentes
import Router from "./Componentes/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);


