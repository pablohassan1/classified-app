import React from "react";
import "./Toolbar.scss";
import SideDrawerToggleButton from "../SideDrawer/SideDrawerToggleButton";
import { Link } from "react-router-dom";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <SideDrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/"><i className="fas fa-user-secret fa-1x"></i>classified</a></div>
            <div className="spacing" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>                   
                    <li><Link to="/post">Post a story</Link></li>
                </ul>
                
            </div>
        </nav>
    </header>
)

export default toolbar;