import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css'


const getSize = (size) => {
    if (size === 24) {
        return "mała";
    } else if (size === 32) {
        return "srednia";
    }
    else if (size === 42) {
        return "duża";
    }
    else
        return "N/A";
}



class Payment extends Component {

    render() {
        const basketList = this.props.basket.map(item => <div>id={item.id} name={item.name}  size={getSize(item.size)} price={item.price}</div>);
        return (
            <>
                <div className="payment-main">Podsumowanie zamowienia:</div>
                {basketList}
                <Link to="/basket">
                    <Button renderas="button" className="custom-buttons rounded-pill basket-button" variant="secondary">
                        <span>wróć do koszyka</span>
                    </Button>
                </Link>
                <br></br>
                <Link to="/">
                    <Button renderas="button" className="custom-buttons rounded-pill basket-button" variant="secondary">
                        <span>menu</span>
                    </Button>
                </Link>
            </>
        )
    };
}

export default Payment;
