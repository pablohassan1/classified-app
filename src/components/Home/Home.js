import React from "react";
import {  Header } from "../Header/Header";
import "./Home.css";
import CardList from "../CardList/CardList";



export const Home = () => {

    
    
    return (
        <div>
            <i className="fas fa-user-secret fa-6x"></i>    
            <Header headerText="The truth is out there.." />
            <CardList />            
        </div>
    )
}