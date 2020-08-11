import React from "react";
import "./StoryCard.css";



export const StoryCard = props => {

    

    return (
        <a href={"/story/" + props.story._id}>
            <div className="card-container">
                <h5>{props.story.title.substring(0,19)}</h5>
                <p>{props.story.content.substring(0,215)} ...</p>
            </div>
        </a>
    )
}