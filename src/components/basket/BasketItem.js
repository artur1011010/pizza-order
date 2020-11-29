import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.css';
import { Button } from 'react-bootstrap';
import pizza from '../../images/pizza1-round.png';


const BasketItem = (props) => {
    return (
        <>
            <div className="basket-item">
                <div><img className="pizza-img" src={pizza} alt="pizza"></img></div>
                <div className="pizza-desc">
                    <div>{props.name}</div>
                    <div className="pizza-size">{props.size}</div>
                </div>
                <div className="right">
                    <div className="delete-button" onClick={() => props.deleteBasketItem(props.id)}>x</div>
                    <div className="pizza-price">{props.price} zł</div>
                </div>
            </div>
        </>

    )
}

export default BasketItem;