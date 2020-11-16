import { Button} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.css';


const Basket = (props) => {

    let basketList = props.basket.map(basketItem => <p>{basketItem.name}, rozmiar: {basketItem.size} : cena: {basketItem.price}</p>);

    return (
        <div className="welcome-page row justify-content-center">
            <div className="col-4">
               <h1>basket:</h1>
               {basketList}
               <Button onClick={() => props.clearBasket()} className="custom-buttons rounded-pill add" variant="secondary">< div>wyczyść koszyk</div></Button>
            </div>
        </div>
    );
}

export default Basket;