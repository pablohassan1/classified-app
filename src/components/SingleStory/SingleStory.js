import React, { Component } from 'react';

import "./SingleStory.scss";
import { Header } from "../Header/Header";

import { firestore } from '../../firebase/firebase.utils';

class SingleStory extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            content: '',
            name: '',
            story: this.props.story,
            user: this.props.user

        }
        
    }   


    componentDidMount(){
        
        firestore.doc('/users/' + this.state.user + '/stories/' + this.state.story).get().then( doc  => {
            if(doc.exists){
                this.setState({
                    title: doc.data().title,
                    content: doc.data().story,
                    name: doc.data().name,
                    story: this.props.story,
                    user: this.props.user
                })
            }
        }).catch(error => {
            console.log(error);
        })        
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