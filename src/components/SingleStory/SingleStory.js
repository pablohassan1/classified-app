import React, { Component } from 'react';
import axios from "axios"; 

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
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default SingleStory;