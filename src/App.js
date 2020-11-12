import React, { Component } from 'react';
import './App.css';
import Controlls from './components/controlls/Controlls';
import WelcomePage from './components/welcomePage/WelcomePage';
import Basket from './components/basket/Basket';
import Menu from './components/menu/Menu';

const size = {
  s: 's',
  m: 'm',
  l: 'l'
}

class App extends Component {

  state = {
    customer: {
      email: "",
      name: "",
      address: "",
      phone: ""
    },
    basket: [],
    menu: [
      {
        id: 1,
        name: "Margherita",
        price_s: 24.00,
        price_m: 29.00,
        price_l: 34.00,
        choosenSize: size.s,
        description: "z sosem pomidorowym, oliwą extra virgin, serem grana padano d.o.p, mozzarellą fior di latte i bazylią"
      },
      {
        id: 2,
        name: "Diavola",
        price_s: 32.00,
        price_m: 37.00,
        price_l: 42.00,
        choosenSize: size.s,
        description: "z sosem pomidorowym, oliwą extra virgin, serem grana padano d.o.p, mozzarellą fior di latte, bazylią i pikantnym salami"
      },
      {
        id: 3,
        name: "Pesto",
        price_s: 24.00,
        price_m: 29.00,
        price_l: 34.00,
        choosenSize: size.s,
        description: "z wędzonym serem provola, pesto z bazylii, neapolitańskimi suszonymi pomidorami, oliwą extra virgin, serem grana padano d.o.p i bazylią"
      },
      {
        id: 4,
        name: "Formaggi",
        price_s: 33.00,
        price_m: 38.00,
        price_l: 43.00,
        choosenSize: size.s,
        description: "z mozzarellą fior di latte, oliwą extra virgin, niebieskim serem gorgonzola d.o.p, serem pecorino romano, panna di burata, pieprzem i bazylią"
      },
      {
        id: 5,
        name: "Nerano",
        price_s: 35.00,
        price_m: 40.00,
        price_l: 46.00,
        choosenSize: size.s,
        description: "z wędzonym serem provola, cukinią, wieprzowym guancine, miętą, płatkami sera caciocavallo i oliwą extra virgine"
      },
      {
        id: 6,
        name: "Buratta",
        price_s: 42.00,
        price_m: 47.00,
        price_l: 55.00,
        choosenSize: size.s,
        description: "focaccia z kawałkami burraty, pomidorami cherry, rukolą, oliwą extra virgine i prosciutto crudo di parma"
      }
    ]
  }
  changeSize = (id, size) => {
    console.log("changeSize()");
    console.log("id : " + id);
    console.log("size:  " + size);

    //TODO - POMYSLEC JAK ZROBIC MENU STATYCZNE, ZEBY UNIEMOZLIWIC ZMIANE POL
    let menu = [...this.state.menu];
    const index = menu.findIndex(menuItem => menuItem.id === id);
    //TODO zmienic na switch-case
    if (menu[index].choosenSize === 24) {
      menu[index].choosenSize = size.s;
      console.log('changed size, menu item id: ' + id + " :size " + size.s);
    } else if (menu[index].choosenSize === 32) {
      menu[index].choosenSize = size.m;
      console.log('changed size, menu item id: ' + id + " :size " + size.m);
    } else
      menu[index].choosenSize = size.l;
    console.log('changed size, menu item id: ' + id + " :size " + size.l);
    this.setState({
      menu
    })
  }

  changeTaskStatus = (id) => {
    let tasks = this.state.tasks;
    const index = tasks.findIndex(task => task.id === id);
    console.log(`index w tablicy ${index}`);
    if (tasks[index].isActive === true) {
      tasks[index].isActive = false;
    } else {
      tasks[index].isActive = true;
    }

    this.setState({
      tasks
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Aplikacja do zamawiania pizzy
        </h1>
          {/* <Controlls></Controlls> */}
          {/* <WelcomePage></WelcomePage> */}
          {/* <Basket></Basket> */}
          <Menu menuList={this.state.menu} changeSize={this.changeSize} ></Menu>
        </header>
      </div>
    );
  }
}

export default App;
