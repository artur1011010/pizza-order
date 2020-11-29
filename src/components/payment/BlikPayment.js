import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './payment.css';
import '../../../node_modules/react-credit-cards/lib/styles.scss';


class BlikPayment extends Component {

    render() {
        return (
                <div>
                    <div className="paymentForm-wrapper">
                        <label htmlFor="blik-code">Wprowadz kod blik:</label>
                        <input
                            id="blik"
                            name="blik-code"
                            min="000000"
                            max="999999">
                        </input>
                    </div>
                    <Link to="/basket">
                        <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button" variant="secondary">
                            <span>Potwierdz i zapłać</span>
                        </Button>
                    </Link>
                </div>
        );
    }
}

export default BlikPayment;