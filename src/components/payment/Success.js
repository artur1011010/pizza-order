import React from 'react';
import heart from '../../images/pizza/pizza-heart.png';
import './payment.css';

const Success = () =>{
    return(
        <>
        <div className="success-wrapper">
            <img className="image" src={heart} alt="chef" ></img>
            <br></br>
            <h1>Dziekujemy za zamówienie :)</h1>
            <h4>Twoja pizza zostanie dostarczona w ciagu 60 min</h4>
        </div>
        </>
    )
}

export default Success;