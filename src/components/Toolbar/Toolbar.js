import React from "react";
import "./Toolbar.css";
import SideDrawerToggleButton from "../SideDrawer/SideDrawerToggleButton";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <SideDrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">myOpenBlog</a></div>
            <div className="spacing" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">CONTACT</a></li>
                    <li><a href="/">POST</a></li>
                </ul>
                
            </div>
        </nav>
    </header>
)

export default toolbar;