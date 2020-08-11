import React, { Component } from "react";
import "./CardList.css";
import { StoryCard } from "../StoryCard/StoryCard";
import axios from "axios";


class CardList extends Component{

    constructor(props){
        super(props)

        this.state = {
            stories: []
        }
    }

    componentDidMount(){
        axios.get("https://enigmatic-scrubland-87375.herokuapp.com/articles")
        .then(response => {
            console.log(response)
            this.setState({stories: response.data})
        })
        .catch(error => console.log(error))
    }

    render(){
        return(
            <div className="card-list row d-flex justify-content-center text-center">
            
                {this.state.stories.map(story=>(
                    
                        <StoryCard 
                            className="col-lg-4"
                            story={story}                    
                            key={story._id}                   
                        />
                   
            ))}
            

        </div>

        )
    }
}
 export default CardList;