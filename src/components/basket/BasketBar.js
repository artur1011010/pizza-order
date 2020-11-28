import { Button } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.css';

import pizza from '../../images/pizza1-round.png';

const passSize = (size) => {

    let result = "mała";
    if (size === 32) {
        result = "średnia";
    }
    else if (size === 42) {
        result = "duża";
    }

    return result;
}


const BasketBar = (props) => {

    let basketList = props.basket.map(basketItem => <div className="basket-bar-item">
        <img className="pizza-img" src={pizza} alt="pizza"></img>
        {basketItem.name},  {passSize(basketItem.size)}; {basketItem.price} zł
    </div>);

    return (
        <div className="basket-bar" style={props.basketSum === 0 ? { display: "none" } : { display: "block" }}>
            <div className="basket-bar-list">
                {basketList}
            </div>
            <Button onClick={() => props.clearBasket()} className="custom-buttons rounded-pill bar-button" variant="secondary"><div>wyczyść koszyk</div></Button>
        </div>
    );
}

export default BasketBar;