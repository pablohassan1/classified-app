import React from "react";
import "./CardList.scss";
import { StoryCard } from "../StoryCard/StoryCard";



export const CardList = props => {
    return(
        <div className="card-list row d-flex justify-content-center text-center">
        
            {props.stories.map(story=>(
                
                    <StoryCard 
                        className="col-lg-4"
                        story={story}                    
                        key={story._id}                   
                    />                   
        ))}       

    </div>
    )  }
