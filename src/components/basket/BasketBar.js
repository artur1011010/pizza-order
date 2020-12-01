import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basket.css';
import pizza from '../../images/pizza1-round.png';
import pizza1 from '../../images/pizza/pizza1.png';
import pizza2 from '../../images/pizza/pizza2.png';
import pizza3 from '../../images/pizza/pizza3.png';
import pizza4 from '../../images/pizza/pizza4.png';
import pizza5 from '../../images/pizza/pizza5.png';
import { get } from 'jquery';



const getSize = (size) => {
    switch (size) {
        case 24:
            return "mała";
        case 32:
            return "średnia";
        case 42:
            return "duża";
        default:
            return "N/A";
    }
}


const getImage = (image) => {
    console.log("image: " + image)
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

const BasketBar = (props) => {

    let basketList = props.basket.map(basketItem => <div className="basket-bar-item">
        <img className="pizza-img" src={getImage(basketItem.image)} alt="pizza"></img>
       <span className="titile"> {getSize(basketItem.size)} {basketItem.name} {basketItem.price} zł</span> 
    </div>);

    return (
        <div className="basket-bar" style={props.basketSum === 0 ? { display: "none" } : { display: "block" }}>
            <div className="basket-bar-list">
                {basketList}
            </div>
        </div>
    );
}

export default BasketBar;