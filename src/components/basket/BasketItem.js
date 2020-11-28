import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.css';
import { Button } from 'react-bootstrap';


const BasketItem = (props) => {
    return (
        <>
            <div className="basket-item">
             {props.name} - {props.size}: {props.price} zł
            <Button onClick={() => props.deleteBasketItem(props.id)} className="custom-buttons rounded-pill basket-button" variant="secondary"><div>usuń</div>
                </Button>
            </div>
        </>

    )
}

export default BasketItem;