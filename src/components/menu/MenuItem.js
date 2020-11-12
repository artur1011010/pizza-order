import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menuItem.css';
import pizza from '../../images/pizza1-round.png';
import Controlls from '../controlls/Controlls';



const menuItem = (props) => {


    return (
        <>
            <div className="row justify-content-center">
                <div className="pizza-card col-lg-4 col-md-6 col-sm-8 col-xs-8">
                    <h3>{props.name}</h3><h1> {props.price} zł</h1>
                    <div className="row">
                        <div className="col-6">
                            <img className="pizza-img" src={pizza} alt="pizza"></img>
                        </div>
                        {/* <div style={{display: "none"}}>{props.description} */}
                        <div className="pizza-desc col-6">{props.description}
                        </div>
                    </div>
                   <Controlls changeSize={props.changeSize} id={props.id} ></Controlls>
                </div>
            </div>
        </>
    );
}

export default menuItem;