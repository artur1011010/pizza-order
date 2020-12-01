import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Cards from 'react-credit-cards';
import './payment.css';
import '../../../node_modules/react-credit-cards/lib/styles.scss';


class CardPayment extends Component {

    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="paymentForm-wrapper">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <div className="card-wrapper">
                    <form className="paymentForm">
                        <input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <input
                            type="text"
                            name="expiry"
                            placeholder="XX/XXXX"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <input
                            type="text"
                            maxLength="3"
                            name="cvc"
                            placeholder="CVV"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <Link to="/success">
                            <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button" variant="secondary">
                                <span>Potwierdz i zapłać</span>
                            </Button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default CardPayment;