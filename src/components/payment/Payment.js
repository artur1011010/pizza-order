import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css';
import './blik.scss';
import blik from '../../images/blik.png';
import card from '../../images/mc-visa.png';
import WelcomePage from '../welcomePage/WelcomePage';

const isNotEmpty = (string) => {
    if (string === "" || string == null) {
        return false;
    }
    return true;
}

const createOrderList = (order, basketSum) => {
    if (order.length === 0) {
        return (
            <div>
                Twój koszyk jest pusty, przejdz do menu...
                <br></br>
                <Link to="/">
                    <Button renderas="button" className="custom-buttons rounded-pill basket-button" variant="secondary">
                        <span>menu</span>
                    </Button>
                </Link>
            </div>
        )
    }
    else {
        return (
            <>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-10">
                        <div className="summary">
                            Do zapłaty: {basketSum} zł
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

class Payment extends Component {

    state = {
        paymetMethod: ""
    }

    handlePaymentMethod(method) {
        console.log(method);
        this.setState({
            paymetMethod: method
        })
    }

    getCustomerData(name, email, phone, postal_code, address) {
        if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(address) && isNotEmpty(phone)) {
            return (
                <>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-10">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Imię i nazwisko</Form.Label>
                                    <Form.Control value={name} className="rounded-pill" type="text" placeholder="" controlId="name" readOnly />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control value={email} className="rounded-pill" type="email" placeholder={email} controlId="emil" readOnly />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>telefon</Form.Label>
                                    <Form.Control value={phone} type="tel" name="phone" className="rounded-pill" placeholder="Twój telefon   np: 123-456-789" controlId="phone" readOnly />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>kod pocztowy</Form.Label>
                                    <Form.Control value={postal_code} className="rounded-pill" type="text" placeholder="XX-XXX" controlId="postal-code" readOnly />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Adres</Form.Label>
                                    <Form.Control value={address} className="rounded-pill" type="address" placeholder="Twój adres: miasto, ulica" controlId="address" readOnly />
                                </Form.Group>
                            </Form >
                            <Link to="/welcome">
                                <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button" variant="secondary">
                                    <div>Zmiana danych</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </>
            )
        }
        else
        // TODO fix routing
            return (
                <>
                    <Route to="/welcome">
                        <WelcomePage updateCustomerData={this.props.updateCustomerData}></WelcomePage>
                    </Route>

                </>
            )
    }

    render() {
        const { name, email, phone, postal_code, address } = this.props.customerData;
        return (
            <>
                <div className="payment-main">
                    {createOrderList(this.props.basket, this.props.basketSum)}
                    {this.getCustomerData(name, email, phone, postal_code, address)}
                    <Link to="/basket">
                        <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button" variant="secondary">
                            <span>wróc do koszyka</span>
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button" variant="secondary">
                            <span>wróc do menu</span>
                        </Button>
                    </Link>
                    <br></br>
                    <h3 className="mt-4">lub wybierz metode płatności i przejdz dalej</h3>
                    <Link to="/payment/blik">
                        <img className="payment-img" src={blik} alt="blik"></img>
                    </Link>
                    <Link to="/payment/card">
                        <img className="payment-img" src={card} alt="mastercard visa payment"></img>
                    </Link>
                </div>
            </>
        )
    };
}

export default Payment;
