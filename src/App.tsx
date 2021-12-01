import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as _ from 'lodash';
import { NavBar } from './components';
import Switch from 'react-router';

import {Route, 
        Link, 
        BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}

      <div className="NavBar">
          <NavBar></NavBar>
      </div>
      <div className="Main">

      </div> 
      <div className="Footer">

      </div> 

    </div>
  );
}

export default App;
