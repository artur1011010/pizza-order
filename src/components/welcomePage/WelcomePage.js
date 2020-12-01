import { Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './welcomePage.css';
import { NavLink } from 'react-router-dom';

class WelcomePage extends Component {

    state = {
        customer: {
            name: "",
            email: "",
            phone: "",
            postal_code: "",
            address: ""
        }
    }

    handleName = (e) => {
        console.log("form control name: " + e.target.value);
        this.setState({
            name: e.target.value
        })
    }

    handleEmail = (e) => {
        console.log("form control email: " + e.target.value);
        this.setState({
            email: e.target.value
        })
    }

    handlePhone = (e) => {
        console.log("form control phone: " + e.target.value);
        this.setState({
            phone: e.target.value
        })
    }

    handlePostalCode = (e) => {
        console.log("form control postal_code: " + e.target.value);
        this.setState({
            postal_code: e.target.value
        })
    }

    handleAddress = (e) => {
        console.log("form control address: " + e.target.value);
        this.setState({
            address: e.target.value
        })
    }

    getCity = (code) => {
        const _url = "http://kodpocztowy.intami.pl/api/";
        let get_url = _url + code;
        let response = fetch(get_url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        console.log(response.data);
    }

    getCustomerFromApp = () => {
        const { name, email, phone, postal_code, address } = this.props.customerData;
        console.log("getCustomerFromApp() welcomePage.js");
        console.log("name: " + name);
        console.log("email: " + email);
        console.log("phone: " + phone);
        console.log("postal_code: " + postal_code);
        console.log("address: " + address);
    }

    updateCustomerDataInApp = () => {
        // const { name, email, phone, postal_code, address } = this.state.customer;
        const cust1 = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            postal_code: this.state.postal_code,
            address: this.state.address

        };
        this.props.updateCustomerData(cust1);
    }

    changeUrlTest = () => {
        this.props.router.push('/basket');
    }

    handleSubmit(event) {
        console.log("########### SUBMIT ##################");
        event.preventDefault();
    }

    render() {
        return (
            <div className="welcome-page row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-10">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Imię i nazwisko</Form.Label>
                            <Form.Control value={this.state.name} onChange={this.handleName} className="rounded-pill" type="text" placeholder="" controlId="name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control value={this.state.email} onChange={this.handleEmail} className="rounded-pill" type="email" placeholder="@" controlId="emil" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>telefon</Form.Label>
                            <Form.Control value={this.state.phone} onChange={this.handlePhone} type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}|[0-9]{9}|\+48[0-9]{9}$" 
                            className="rounded-pill" placeholder="Twój telefon   np: 123-456-789" controlId="phone" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>kod pocztowy</Form.Label>
                            <Form.Control value={this.state.postal_code} onChange={this.handlePostalCode} className="rounded-pill" type="text" placeholder="XX-XXX" controlId="postal-code" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Adres</Form.Label>
                            <Form.Control value={this.state.address} onChange={this.handleAddress} className="rounded-pill" type="address" placeholder="Twój adres: miasto, ulica" controlId="address" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Akceptuje regulamin serwisu" controlId="user_conditions" />
                        </Form.Group>
                        <NavLink exact to="/">
                            <Button onClick={() => this.updateCustomerDataInApp()} className="custom-buttons rounded-pill basket-button" variant="secondary"><div>przesylanie danych i przejscie do menu </div>
                            </Button>
                        </NavLink>
                    </Form>

                    <br></br>
                </div>
            </div>
        );
    }
}

export default WelcomePage;