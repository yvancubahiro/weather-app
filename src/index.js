import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CityManager from './CityManager'
//import AddCity from './CityList'
import reportWebVitals from './reportWebVitals';
import ActualLocation from './ActualLocation';
import Display from './Display';



ReactDOM.render(
  <React.StrictMode>
    <Display/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
