import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';
import MenuItem from './MenuItem';

const Menu = (props) => {

    const menuList = props.menuList.map(pizza=> <MenuItem id={pizza.id} description={pizza.description} price_s={pizza.price_s}
        price_m={pizza.price_m} price_l={pizza.price_l} name={pizza.name}
    ></MenuItem>);
    return (
        <>
            <div>menu list:</div>
            {menuList}
        </>
    );
}

export default Menu;