import React from "react";
import "./CardList.scss";
import StoryCard  from "../StoryCard/StoryCard";



export const CardList = ({ stories }) => {
    return(
        
            <div className="card-list">        
                {stories.map(story=>(
                
                    <StoryCard 
                        className="col-lg-4"
                        story={story}                    
                        key={story.id}                   
                    />                   
            ))}      

            </div>
             
            
    )  }
