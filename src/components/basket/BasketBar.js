import { Button } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.css';


const BasketBar = (props) => {

    let basketList = props.basket.map(basketItem => <p>{basketItem.name}, rozmiar: {basketItem.size} : cena: {basketItem.price}</p>);

    return (
        
        <div className="basket-bar" style={props.basketSum === 0 ? { display: "none" } : { color: "white" }}>
            <div className="">
                {basketList}
            </div>
            <div className="">
            <Button onClick={() => props.clearBasket()} className="custom-buttons rounded-pill basket-button" variant="secondary"><div>wyczyść koszyk</div></Button>
            </div>
        </div>
    );
}

export default BasketBar;