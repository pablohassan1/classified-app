import React, { Component } from "react";
import {  Header } from "../Header/Header";
import "./Home.scss";
import { CardList } from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
// import axios from "axios";


class Home extends Component{
    constructor(props){
        super();
        this.state = {
            searchField: '',
            stories: props.stories
        };
    }

    // componentDidMount(){
    //     axios.get("https://enigmatic-scrubland-87375.herokuapp.com/articles")
    //     .then(response => {
    //         console.log(response)
    //         this.setState({stories: response.data})
    //     })
    //     .catch(error => console.log(error))
    // }


    render(){

        const { stories, searchField } = this.state;        
        const filterStories = stories.filter(story => 
            story.title.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className="wrap">                
                               
                <Header headerText="The truth is out here.." />
                <SearchBox 
                    placeholder="search stories"
                    handleChange={e =>this.setState({searchField: e.target.value})}
                />
                <CardList 
                    stories={filterStories}
                />            
            </div>
        )
    }
}

export default Home;



