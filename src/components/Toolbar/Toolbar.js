import React from "react";
import "./Toolbar.css";
import SideDrawerToggleButton from "../SideDrawer/SideDrawerToggleButton";

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
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>                    
                    <li><a href="/post">Post a story</a></li>
                </ul>
                
            </div>
        </nav>
    </header>
)

export default toolbar;