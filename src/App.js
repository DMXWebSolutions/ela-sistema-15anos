import React, { Component } from 'react';
import './App.css';
import Principal from './screens/main';
import Login from './screens/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Principal/>
      </div>
    );
  }
}

export default App;
