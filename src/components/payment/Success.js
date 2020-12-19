import React from 'react';
import heart from '../../images/pizza/pizza-heart.png';
import './payment.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const goBack = () => {
    console.log("go back invoked ()");
    setTimeout(() => {
        return(
            window.location.replace('https://pizza-order2020.herokuapp.com/')
        )
    }, 5000) // render for 2 seconds and then push to home 
}

const Success = () => {

    goBack();

    return (
        <>
            <div className="success-wrapper">
                <img className="image" src={heart} alt="chef" ></img>
                <br></br>
                <h1>Dziekujemy za zamówienie :)</h1>
                <h4>Twoja pizza zostanie dostarczona w ciagu 60 min</h4>
            </div>

            <Link to="/">
                <Button renderas="button" className="custom-buttons rounded-pill basket-button" variant="secondary">
                    <span>wróc do menu</span>
                </Button>
            </Link>
        </>
    )
}

export default Success;