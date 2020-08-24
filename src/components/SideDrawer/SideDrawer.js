import React from "react";
import "./SideDrawer.scss";
import { Link } from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = "side-drawer";
    if (props.show){
        drawerClasses = "side-drawer open";
    };

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/post">POST A STORY</Link></li>
            </ul>
        </nav>
    );
};


export default sideDrawer;