import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menuItem.css';
import pizza from '../../images/pizza1-round.png';


const menuItem = (props) => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="pizza-card col-md-8 col-lg-6">
                    <h3>{props.id}: {props.name} </h3>
                    <img className="pizza-img" src={pizza} alt="pizza"></img>
                    <div>{props.description}
                    <br/> cena: {props.price_s} zł
                    </div>
                </div>
            </div>
        </>
    );
}

export default menuItem;