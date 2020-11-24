import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css'
import avatar from '../../images/account_avat.png';

const NavBar = (props) => {

    // let basketList = props.basket.map(basketItem => <p>{basketItem.name}, rozmiar: {basketItem.size} : cena: {basketItem.price}</p>);

    return (
        <div className="nav-bar">
            <NavLink className="navbar-item" activeClassName="is-active" exact to="/welcome">
                <div className="left-nav"><img className="nav-avatar" src={avatar} alt="avatar"></img>{props.customer.name}</div>
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" exact to="/basket">
                <div className="right-nav">{props.basketSum === 0 ? "Twój koszyk jest jeszcze pusty" : "koszyk: "+  props.basketSum + " zł"}</div>
            </NavLink>
        </div>
    );
};

export default NavBar;
