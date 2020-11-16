import 'bootstrap/dist/css/bootstrap.min.css';
import './menuItem.css';
import pizza from '../../images/pizza1-round.png';
import Controlls from '../controlls/Controlls';



const menuItem = (props) => {

    let price;
    if (props.choosenSize === 24) {
        // console.log(" size = s");
        price = props.price_s;
    }
    if (props.choosenSize === 32) {
        // console.log(" size = m");
        price = props.price_m;
    }
    if (props.choosenSize === 42) {
        // console.log(" size = l");
        price = props.price_l;
    }


    return (
        <>
            <div className="row justify-content-center">
                <div className="pizza-card col-xl-6 col-lg-8 col-10">
                    <h3>{props.name}</h3><h1> {price} zł</h1><h6>za rozmiar {props.choosenSize} cm</h6>
                    <div className="row">
                        <div className="col-6">
                            <img className="pizza-img" src={pizza} alt="pizza"></img>
                        </div>
                        {/* <div style={{display: "none"}}>{props.description} */}
                        <div className="pizza-desc col-6">{props.description}
                        </div>
                    </div>
                    <Controlls changeSize={props.changeSize} id={props.id} addToBasket={props.addToBasket} choosenSize={props.choosenSize}></Controlls>
                </div>
            </div>
        </>
    );
}

export default menuItem;