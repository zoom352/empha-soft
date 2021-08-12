import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import Navibar from './Components/Navibar/Navibar';
import { Route } from "react-router-dom";
import WithUrlDataContainerComponent from './Components/Users/UsersContainer';
import Login from './Components/Login/Login'
import AboutContainer from './Components/about/aboutContainer.js';
import Photo from './Components/Photo/Photo';

const App = (props) => {

  
  return (
    <div>
      <Navibar/>

      <Route path='/Users'
        render={() => <WithUrlDataContainerComponent/>} />
      
      <Route path='/Login'
        render={() => <Login/>} />
      
      <Route path='/about'
        render={() => <AboutContainer />} />
      
      <Route path='/photo'
        render={() => <Photo/> }/>
    </div>  
    );
  }



export default App;
