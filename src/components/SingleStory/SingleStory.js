import React, { Component } from 'react';
import axios from "axios"; 
import "./SingleStory.scss";
import { Header } from "../Header/Header";

class SingleStory extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: "",
            content: "",
            name: "",
            id: this.props.story

        }
        console.log(this.state);
    }
    
    
    componentDidMount(){
        axios.get("https://enigmatic-scrubland-87375.herokuapp.com/articles/"  + this.state.id)
        .then(response => {
            console.log(response)
            this.setState({
                title: response.data.title,
                content: response.data.content,
                name: response.data.name
            })
        })
        .catch(error => console.log(error))
    }


    render() {
        return (
            <div className="story-wrapper">
                <Header headerText={this.state.title} />                
                <p className="story-content">{this.state.content}</p>
                <p className="story-signature">{this.state.name}</p>
            </div>
        );
    }
}

export default SingleStory;