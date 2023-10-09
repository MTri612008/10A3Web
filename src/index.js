import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Member  from './Comp/Member';
import minhnut from "./Comp/Res/minhnhut.jpg";
import minhman from "./Comp/Res/minhman.jpg"
import huuthanh from "./Comp/Res/huuthanh.jpg";
import phuhao from "./Comp/Res/phuhao.jpg";
import {
  BrowserRouter
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
