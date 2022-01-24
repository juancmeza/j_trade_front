import React from 'react';
import './App.css';
import * as _ from 'lodash';
import { NavBar, Homepage, Cryptocurrencies, Exchanges, CryptoDetails, Portfolio, News } from './components';
// import Switch from 'react-router';

import {Route, 
        Switch,
        Link, 
} from 'react-router-dom';

import { Layout, Typography, Space} from 'antd';

function App() {
  return (
    <div className="app">
      <div className="navbar">
          <NavBar></NavBar>
      </div>
      <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      </div> 
      <div className="footer">

      </div> 

    </div>
  );
}

export default App;
