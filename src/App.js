import React, { Component } from 'react';
import './App.css';
import Controlls from './components/controlls/Controlls';
import WelcomePage from './components/welcomePage/WelcomePage';
import Basket from './components/basket/Basket';



class App extends Component {

  state = {
    customer: {
      email:"",
      name:"",
      address:"",
      telefon: ""
    },
    basket: []
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Aplikacja do zamawiania pizzy
        </h1>
        <Controlls></Controlls>
        <WelcomePage></WelcomePage>
        <Basket></Basket>
        </header>
      </div>
    );
  }
}

export default App;
