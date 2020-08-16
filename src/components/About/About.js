import React from "react";
import { Header } from "../Header/Header";
import conspImg from "../../images/consp.PNG";
import "./About.scss";

export const About = () => {
    return (
        <div>
        <Header headerText="About" />
        <p className="about-content">This app allows people to share conspiracy theories on various subjects. Anyone can contribute. 
        The crazier the theory better. Go ahead and share the most unrealistic thoughts that don't let you sleep. 
        We want to know it all. Just follow the "Post a story" section and fill out the form. All the fields are 
        required but can be made up.</p>
        <img src={conspImg} alt="conspiracy" className="resp"/>
        </div>
        
    )
}