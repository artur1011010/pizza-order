import Button from 'react-bootstrap/Button';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './controlls.css';


const Controlls = () => {
    return (
        <>
            <Button className="custom-buttons rounded-pill pizza-size" variant="secondary"><div>24cm</div></Button>
            <Button className="custom-buttons rounded-pill pizza-size" variant="secondary"><div>32cm</div></Button>
            <Button className="custom-buttons rounded-pill pizza-size" variant="secondary"><div>42cm</div></Button>
            <Button className="custom-buttons rounded-pill add" variant="secondary">< div>Dodaj do koszyka</div></Button>
        </>
    );
}

export default Controlls;