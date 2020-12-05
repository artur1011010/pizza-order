import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './payment.css';
import '../../../node_modules/react-credit-cards/lib/styles.scss';


class BlikPayment extends Component {

    clearBasket = () => {
        this.props.clearBasket();
    }

    render() {
        return (
            <div>
                <div className="paymentForm-wrapper">
                    <label htmlFor="blik-code">Wprowadz kod blik:</label>
                    <input
                        id="blik"
                        type="text"
                        maxLength="6"
                        name="blik-code">
                    </input>
                </div>
                <Link to="/success">
                    <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button"  onClick={this.clearBasket}  variant="secondary">
                        <span>Potwierdz i zapłać</span>
                    </Button>
                </Link>
            </div>
        );
    }
}

export default BlikPayment;