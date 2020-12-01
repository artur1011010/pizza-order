import 'bootstrap/dist/css/bootstrap.min.css';
import './menuItem.css';
import pizza from '../../images/pizza1-round.png';
import pizza1 from '../../images/pizza/pizza1.png';
import pizza2 from '../../images/pizza/pizza2.png';
import pizza3 from '../../images/pizza/pizza3.png';
import pizza4 from '../../images/pizza/pizza4.png';
import pizza5 from '../../images/pizza/pizza5.png';



import Controlls from '../controlls/Controlls';



const getImage = (image) => {
    switch (image) {
        case 1:
            return pizza;
        case 2:
            return pizza1;
        case 3:
            return pizza2;
        case 4:
            return pizza3;
        case 5:
            return pizza4;
        case 6:
            return pizza5;

        default:
            return pizza;
    }
}


const menuItem = (props) => {
    console.log("props:  image: " + props.image)
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
                        <div className="col-5">
                            <img className="pizza-img" src={getImage(props.image)} alt="pizza"></img>
                        </div>
                        {/* <div style={{display: "none"}}>{props.description} */}
                        <div className="pizza-desc col-5">{props.description}
                        </div>
                    </div>
                    <Controlls changeSize={props.changeSize} id={props.id} addToBasket={props.addToBasket} choosenSize={props.choosenSize}></Controlls>
                </div>
            </div>
        </>
    );
}

export default menuItem;