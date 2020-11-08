import { Button, Form } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './welcomePage.css';


const WelcomePage = (props) => {

    return (
        <div className="welcome-page row justify-content-center">
            <div className="col-4">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>email</Form.Label>
                        <Form.Control className="rounded-pill" type="email" placeholder="@" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Adres</Form.Label>
                        <Form.Control  className="rounded-pill" type="address" placeholder="Twój adres: miasto, ulica, kod pocztowy" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Akceptuje regulamin serwisu" />
                    </Form.Group>
                    <Button className="custom-buttons rounded-pill add" variant="primary" type="submit">
                        Zapisz
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default WelcomePage;