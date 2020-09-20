import React from "react";
import "./StoryCard.scss";

import { withRouter } from 'react-router-dom';


class StoryCard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isRedirecting: false

    }
  }

  handleClick = () => {
    this.setState({
      isRedirecting: true
    })
    this.props.history.push('/story/' + this.props.story.userId + '/' + this.props.story.id);
}

  render(){
    return (                
      <div className="card-container" onClick={() => this.handleClick()}>
          <h5 className="story-card-header">{this.props.story.title.substring(0,19)}</h5>
          <p className="story-card-content">{this.props.story.story.substring(0,215)} ...</p>
      </div>                
    )
  }
}

export default withRouter(StoryCard);



