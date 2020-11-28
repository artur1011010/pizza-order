import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css';
import './payment.scss';
import blik from '../../images/blik.png';
import card from '../../images/mc-visa.png';
import CardPaymentForm from './CardPaymentForm';


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

const isNotEmpty = (string) => {
    if (string.trim() === "" || string.trim().length === 0) {
        return false;
    }
    return true;
}

const getCustomerModule = (name, email, phone, postal_code, address) => {
    if (isNotEmpty(name) && isNotEmpty(phone) && isNotEmpty(address)) {
        return (
            <>
                <div className="order-list">
                    Twoje dane:
                    <ul>
                        <li>{name}</li>
                        <li>email {email}</li>
                        <li>telefon: {phone}</li>
                        <li>adres: {address} {postal_code}</li>
                        <li></li>
                    </ul>
                    <Link to="/form">
                        <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button" variant="secondary">
                            <div>Przejdz do formularza zmiany danych</div>
                        </Button>
                    </Link>
                </div>
            </>
        )
    } else
        return (
            <>
                Uzupełnij dane:
                <br></br>
                <Link to="/form">
                    <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button" variant="secondary">
                        <div>Przejdz do formularza zmiany danych</div>
                    </Button>
                </Link>
            </>
        )
}


const createOrderList = (order, basketSum) => {
    if (order.length === 0) {
        return (
            <div>
                Twój koszyk jest podsty, przejdz do menu...
                <Link to="/">
                    <Button renderas="button" className="custom-buttons rounded-pill basket-button" variant="secondary">
                        <span>menu</span>
                    </Button>
                </Link>
            </div>
        )
    }
    else {
        const basketList = order.map(item => <li>{getSize(item.size)} {item.name} {item.price} zł</li>);
        return (
            <>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-10 order-list">
                        <ul>
                            {basketList}
                        </ul>
                        Łączna kwota do zapłaty: {basketSum + 6} zł (doliczylismy 6 zł opłaty za dowóz)
                        <br></br>
                        <Link to="/basket">
                            <Button renderas="button mt-3" className="custom-buttons rounded-pill basket-button" variant="secondary">
                                <span>edytuj koszyk</span>
                            </Button>
                        </Link>
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

    cardPayment() {
        return (
            <>
               <CardPaymentForm></CardPaymentForm>
            </>
        )
    }
    //nie dziala ograniczenie ilosci znaków
    blikPayment() {
        return (
            <>
                <div>
                    <label labelFor="blik-code">Wprowadz kod blik:</label>
                    <input
                        id="blik"
                        name="blik-code"
                        min="000000"
                        max="999999">
                    </input>
                </div>
            </>
        )
    }

    render() {
        const { name, email, phone, postal_code, address } = this.props.customerData;
        return (
            <>
                <div className="payment-main">
                    {createOrderList(this.props.basket, this.props.basketSum)}
                    {getCustomerModule(name, email, phone, postal_code, address)}
                    <span className="col-6"><img onClick={() => this.handlePaymentMethod('blik')} className="payment-img" src={blik} alt="blik"></img></span>
                    <span className="col-6"><img onClick={() => this.handlePaymentMethod('card')} className="payment-img" src={card} alt="mastercard visa payment"></img></span>
                    {(this.state.paymetMethod === "blik") ? this.blikPayment() : null}
                    {(this.state.paymetMethod === "card") ? this.cardPayment() : null}
                </div>
            </>
        )
    };
}

export default Payment;
