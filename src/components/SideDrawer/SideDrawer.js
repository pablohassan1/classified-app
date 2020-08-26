import React from "react";
import "./SideDrawer.scss";
import { Link } from 'react-router-dom';

const sideDrawer = ({ show, backdropClickHandler }) => {
    let drawerClasses = "side-drawer";
    if (show){
        drawerClasses = "side-drawer open";
    };

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/" onClick={backdropClickHandler}>HOME</Link></li>
                <li><Link to="/about" onClick={backdropClickHandler}>ABOUT</Link></li>
                <li><Link to="/post" onClick={backdropClickHandler}>POST A STORY</Link></li>
            </ul>
        </nav>
    );
};


export default sideDrawer;