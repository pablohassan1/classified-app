import React from "react";
import "./StoryCard.css";


export const StoryCard = props => {
    

    return (

        <div className="card-container">
            <h2>{props.story.title}</h2>
            <p>{props.story.content}</p>
        </div>
    )
}