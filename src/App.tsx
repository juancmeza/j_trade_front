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
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{color: 'white'}}>
            J-Trade
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/portfolio'>News</Link>
          </Space>
        </div> 
      </div> 
    </div>
  );
}

export default App;
