import React, { Component } from 'react';
import './App.css';
import Controlls from './components/Controlls';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Aplikacja do zamawiania pizzy
        </h1>
          <Controlls></Controlls>
        </header>
      </div>
    );
  }
}

export default App;
