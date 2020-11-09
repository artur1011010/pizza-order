import React, { Component } from 'react';
import './App.css';
import Controlls from './components/controlls/Controlls';
import WelcomePage from './components/welcomePage/WelcomePage';
import Basket from './components/basket/Basket';
import Menu from './components/menu/Menu';



class App extends Component {

  state = {
    customer: {
      email: "",
      name: "",
      address: "",
      telefon: ""
    },
    basket: [],
    menu: [
      {
        id: 1,
        name: "Margherita",
        price_s: 24.00,
        price_m: 29.00,
        price_l: 34.00,
        description: "z sosem pomidorowym, oliwą extra virgin, serem grana padano d.o.p, mozzarellą fior di latte i bazylią"
      },
      {
        id:2,
        name: "Diavola",
        price_s: 32.00,
        price_m: 37.00,
        price_l: 42.00,
        description: "z sosem pomidorowym, oliwą extra virgin, serem grana padano d.o.p, mozzarellą fior di latte, bazylią i pikantnym salami"
      },
      {
        id: 3,
        name: "Pesto",
        price_s: 24.00,
        price_m: 29.00,
        price_l: 34.00,
        description: "z wędzonym serem provola, pesto z bazylii, neapolitańskimi suszonymi pomidorami, oliwą extra virgin, serem grana padano d.o.p i bazylią"
      },
      {
        id:4,
        name: "Formaggi",
        price_s: 33.00,
        price_m: 38.00,
        price_l: 43.00,
        description: "z mozzarellą fior di latte, oliwą extra virgin, niebieskim serem gorgonzola d.o.p, serem pecorino romano, panna di burata, pieprzem i bazylią"
      },
      {
        id: 5,
        name: "Nerano",
        price_s: 35.00,
        price_m: 40.00,
        price_l: 46.00,
        description: "z wędzonym serem provola, cukinią, wieprzowym guancine, miętą, płatkami sera caciocavallo i oliwą extra virgine"
      },
      {
        id: 6,
        name: "Buratta",
        price_s: 42.00,
        price_m: 47.00,
        price_l: 55.00,
        description: "focaccia z kawałkami burraty, pomidorami cherry, rukolą, oliwą extra virgine i prosciutto crudo di parma"
      }
    ]
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Aplikacja do zamawiania pizzy
        </h1>
          <Controlls></Controlls>
          {/* <WelcomePage></WelcomePage> */}
          {/* <Basket></Basket> */}
          <Menu menuList={this.state.menu}></Menu>
        </header>
      </div>
    );
  }
}

export default App;
