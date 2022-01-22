import React from 'react';
import './App.css';
import * as _ from 'lodash';
import { NavBar, Homepage, Cryptocurrencies, Exchanges, CryptoDetails, Portfolio, News } from './components';
// import Switch from 'react-router';

import {Route, 
        Link,
        Routes, 
        BrowserRouter as Router,
} from 'react-router-dom';

import { Layout, Typography, Space} from 'antd';

function App() {
  return (
    <div className="app">
      

      <div className="navbar">
          <NavBar></NavBar>
      </div>
      <div className="main">

      </div> 
      <div className="footer">

      </div> 

    </div>
  );
}

export default App;
