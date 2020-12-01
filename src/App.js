import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewForm from './components/form//NewForm';
import WelcomePage from './components/welcomePage/WelcomePage';
import BasketBar from './components/basket/BasketBar';
import Menu from './components/menu/Menu';
import NavBar from './components/navbar/Navbar';
import Basket from './components/basket/Basket';
import Payment from './components/payment/Payment';
import BlikPayment from './components/payment/BlikPayment';
import CardPayment from './components/payment/CardPayment';
import Success from './components/payment/Success';


class App extends Component {

  state = {
    customer: {
      name: "",
      email: "",
      phone: "",
      postal_code: "",
      address: "",
    },
    basketCounter: 0,
    basket: [],
    basketSum: 0,
    menu: [
      {
        id: 1,
        name: "Margherita",
        price_s: 24.00,
        price_m: 29.00,
        price_l: 34.00,
        choosenSize: 24,
        description: "z sosem pomidorowym, oliwą extra virgin, serem grana padano d.o.p, mozzarellą fior di latte i bazylią",
        image: 1,
        bar_image: ""
      },
      {
        id: 2,
        name: "Diavola",
        price_s: 32.00,
        price_m: 37.00,
        price_l: 42.00,
        choosenSize: 24,
        description: "z sosem pomidorowym, oliwą extra virgin, serem grana padano d.o.p, mozzarellą fior di latte, bazylią i pikantnym salami",
        image: 2,
        bar_image: ""
      },
      {
        id: 3,
        name: "Pesto",
        price_s: 24.00,
        price_m: 29.00,
        price_l: 34.00,
        choosenSize: 24,
        description: "z wędzonym serem provola, pesto z bazylii, neapolitańskimi suszonymi pomidorami, oliwą extra virgin, serem grana padano d.o.p i bazylią",
        image: 3,
        bar_image: ""
      },
      {
        id: 4,
        name: "Formaggi",
        price_s: 33.00,
        price_m: 38.00,
        price_l: 43.00,
        choosenSize: 24,
        description: "z mozzarellą fior di latte, oliwą extra virgin, niebieskim serem gorgonzola d.o.p, serem pecorino romano, panna di burata, pieprzem i bazylią",
        image: 4,
        bar_image: ""
      },
      {
        id: 5,
        name: "Nerano",
        price_s: 35.00,
        price_m: 40.00,
        price_l: 46.00,
        choosenSize: 24,
        description: "z wędzonym serem provola, cukinią, wieprzowym guancine, miętą, płatkami sera caciocavallo i oliwą extra virgine",
        image: 5,
        bar_image: ""
      },
      {
        id: 6,
        name: "Buratta",
        price_s: 42.00,
        price_m: 47.00,
        price_l: 55.00,
        choosenSize: 24,
        description: "focaccia z kawałkami burraty, pomidorami cherry, rukolą, oliwą extra virgine i prosciutto crudo di parma",
        image: 6,
        bar_image: ""
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
    console.log("menu index: " + index);
    menu[index].choosenSize = size;
    console.log("menu[index].choosenSize: " + menu[index].choosenSize);

    this.setState({
      menu: menu
    })
  }

  addToBasket = (id, size) => {

    let basketCounter = this.state.basketCounter;
    // add ID referencing to exact object - new id
    const menu = [...this.state.menu];
    const index = menu.findIndex(menuItem => menuItem.id === id);
    menu[index].choosenSize = size;
    const basketItem = {
      id: basketCounter,
      name: menu[index].name,
      size: menu[index].choosenSize,
      description: menu[index].description,
      price: this.checkPrice(menu[index].choosenSize, index),
      image: menu[index].image
    }
    basketCounter = basketCounter + 1;
    let basket = [...this.state.basket];
    basket.push(basketItem);
    let basketSum = this.updateBasketSum(basket);
    console.log("basketSum: " + basketSum);
    this.setState({
      basketCounter,
      basket,
      basketSum
    })
  }

  // TODO - analyze and fix
  deleteBasketItem = (id) => {
    console.log("deleteBasketItem()");
    console.log("id: " + id)
    let basket = [...this.state.basket];
    const index = basket.findIndex(basketItem => basketItem.id === id);
    console.log("index: " + index)
    basket.splice(index, 1);
    let basketSum = this.updateBasketSum(basket);
    this.setState({
      basket,
      basketSum
    })
  }

  checkBasket = () => {
    console.log(this.state.basket);
  }

  clearBasket = () => {
    this.setState({ basket: [], basketSum: 0 });
  };

  checkPrice(size, index) {
    let priceResult = 'N/A'
    if (size === 24) {
      priceResult = this.state.menu[index].price_s
    }
    if (size === 32) {
      priceResult = this.state.menu[index].price_m
    }
    if (size === 42) {
      priceResult = this.state.menu[index].price_l
    }
    console.log("priceResult: " + priceResult);
    return priceResult;
  }

  updateBasketSum(basket) {
    let result = 0;
    basket.forEach(i => result += i.price);
    return result;
  }
  updateCustomerData = (customer) => {
    console.log("updateCustomerData() in App.js");
    const { name, email, phone, postal_code, address } = customer;
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("phone: " + phone);
    console.log("postal_code: " + postal_code);
    console.log("address: " + address);

    console.log("setState()");

    this.setState({
      customer
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar customer={this.state.customer} basket={this.state.basket} basketSum={this.state.basketSum}></NavBar>
          <Route exact path="/">
            <div className="body-wraper">
              <Menu menuList={this.state.menu} changeSize={this.changeSize} addToBasket={this.addToBasket}></Menu>
            </div>
            <NavLink className="navbar-item" activeClassName="is-active" exact to="/basket">
              <BasketBar basket={this.state.basket} clearBasket={this.clearBasket} basketSum={this.state.basketSum}></BasketBar>
            </NavLink>
          </Route>
          <Route exact path="/basket">
            <Basket basket={this.state.basket} clearBasket={this.clearBasket} basketSum={this.state.basketSum} deleteBasketItem={this.deleteBasketItem}></Basket>
          </Route>
          <Route path="/welcome">
            <WelcomePage updateCustomerData={this.updateCustomerData} customerData={this.state.customer}></WelcomePage>
          </Route>
          <Route exact path="/payment">
            <Payment basket={this.state.basket} basketSum={this.state.basketSum} customerData={this.state.customer}></Payment>
          </Route>
          <Route exact path="/form">
            <NewForm></NewForm>
          </Route>
          <Route exact path="/payment/blik">
            <BlikPayment></BlikPayment>
          </Route>
          <Route exact path="/payment/card">
            <CardPayment></CardPayment>
          </Route>
          <Route exact path="/success">
            <Success></Success>
          </Route>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
