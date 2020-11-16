import Button from 'react-bootstrap/Button';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './controlls.css';


const Controlls = (props) => {

    return (
        <>
            <Button onClick={() => props.changeSize(props.id, 24)} className="custom-buttons rounded-pill pizza-size" variant="secondary"><div>24cm</div></Button>
            <Button onClick={() => props.changeSize(props.id, 32)} className="custom-buttons rounded-pill pizza-size" variant="secondary"><div>32cm</div></Button>
            <Button onClick={() => props.changeSize(props.id, 42)} className="custom-buttons rounded-pill pizza-size" variant="secondary"><div>42cm</div></Button>
            <Button onClick={() => props.addToBasket(props.id, props.choosenSize)} className="custom-buttons rounded-pill add" variant="secondary">< div>Dodaj do koszyka</div></Button>
        </>
    );
}

export default Controlls;