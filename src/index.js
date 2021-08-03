import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './Redux/combine-reducer';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
  </BrowserRouter>, document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,