import React from 'react';
import './navbar.css'


const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <div className="left-nav">client</div>
            <div className="right-nav">basket</div>
        </div>
    );
};

export default NavBar;


// <div className="left-nav">
// <p data-href="#myCarousel" >adrian adin dutkowski</p><p data-href="#about">about</p>
// </div>
// <div className="right-nav">
// <p data-href="#myCarousel"> HAVE A NICE DAY!</p>
// </div>