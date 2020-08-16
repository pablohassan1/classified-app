import React, { useState } from "react";
import "./StoryCard.scss";
import { useHistory } from 'react-router-dom';


export const StoryCard = props => {
    const [isRedirecting, setIsRedirecting] = useState(false); 
    let history = useHistory();

    if(isRedirecting){
        history.push("/story/" + props.story._id);
      }

    const handleClick = () => {
        setIsRedirecting(true);
    }


      return (                
                    <div className="card-container" onClick={handleClick}>
                        <h5 className="story-card-header">{props.story.title.substring(0,19)}</h5>
                        <p className="story-card-content">{props.story.content.substring(0,215)} ...</p>
                    </div>                
            )
}


