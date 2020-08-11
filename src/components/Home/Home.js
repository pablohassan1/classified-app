import React from "react";
import {  Header } from "../Header/Header";
import "./Home.css";
import CardList from "../CardList/CardList";



export const Home = () => {

    
    
    return (
        <div className="wrapper">                
                           
            <Header headerText="The truth is out here.." />
            <CardList />            
        </div>
    )
}