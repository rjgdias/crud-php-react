import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home';
import Insert from './pages/insert';
import {Visualizar} from './pages/visual'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Editar } from './pages/edit';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}/>
      <Route path = "/insert" element = {<Insert />}/>
      <Route path = "/visualizar/:id" element = {<Visualizar />}/>
      <Route path = "/editar/:id" element = {<Editar />}/> 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
