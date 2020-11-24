import { Button } from 'react-bootstrap';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.css';
import BasketItem from './BasketItem';


const Basket = (props) => {

    let basketList = props.basket.map(item => <BasketItem id={item.id} name={item.name} size={item.size} price={item.price} deleteBasketItem={props.deleteBasketItem}> </BasketItem>);

    return (
        <Route exact path="/basket">
            <div className="basket-wrapper">
                {basketList}
                {(props.basketSum !== 0) ? "suma " + props.basketSum + " zł" : "Twoj koszyk jest pusty"} 
                <br></br>
                {(props.basketSum !== 0) ? <Link to="/payment">
                    <Button renderas="button" className="custom-buttons rounded-pill basket-button" variant="secondary">
                        <span>Przejdz do płatności</span>
                    </Button>
                </Link>
                : null}
                <br></br>
                {(props.basketSum !== 0) ? <Button onClick={() => props.clearBasket()} className="custom-buttons rounded-pill basket-button" variant="secondary"><div>wyczyść koszyk</div>
                </Button> : null}
                <br></br>
                <Link to="/">
                    <Button renderas="button" className="custom-buttons rounded-pill basket-button" variant="secondary">
                        <span>menu</span>
                    </Button>
                </Link>

            </div>
        </Route>
    );
}

export default Basket;