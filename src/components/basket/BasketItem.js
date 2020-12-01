import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.css';
import pizza from '../../images/pizza1-round.png';
import pizza1 from '../../images/pizza/pizza1.png';
import pizza2 from '../../images/pizza/pizza2.png';
import pizza3 from '../../images/pizza/pizza3.png';
import pizza4 from '../../images/pizza/pizza4.png';
import pizza5 from '../../images/pizza/pizza5.png';



const getImage = (image) => {
    switch (image) {
        case 1:
            return pizza;
        case 2:
            return pizza1;
        case 3:
            return pizza2;
        case 4:
            return pizza3;
        case 5:
            return pizza4;
        case 6:
            return pizza5;

        default:
            return pizza;
    }
}



const BasketItem = (props) => {
    return (
        <>
            <div className="basket-item">
                <div><img className="pizza-img" src={getImage(props.image)} alt="pizza"></img></div>
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