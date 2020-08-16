import React from "react";
import "./SideDrawerToggleButton.scss";

const sideDrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>

);


export default sideDrawerToggleButton;