import React, { Component } from 'react';
import './App.css';
import Principal from './screens/main';
import Login from './screens/Login';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
