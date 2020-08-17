import React, { Component } from "react";
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.scss";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import  Home  from "./components/Home/Home";
import { About } from "./components/About/About"; 
import { PostForm } from "./components/PostForm/PostForm";
import SingleStory from "./components/SingleStory/SingleStory";

const story = ({match})=>{
  return (
    <SingleStory 
      story={match.params.storyid}
    />
  )
}


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  // zmeni state.sideDrawerOpen na opacnou hodnotu
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
 // zmeni state.sideDrawerOpen na false
  backdropClickHandler = () => {
    this.setState(() => ({sideDrawerOpen: false}));
  };


  render() {
    let backdrop;
 // pokud je state.sideDrawerOpen true  -- backdrop = <Backdrop />
    if (this.state.sideDrawerOpen){      
      backdrop = <Backdrop backDropClick={this.backdropClickHandler}/>;
    }

  return (
   
    <Router>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      
  {/* zobrazi se pokud state.sideDrawerOpen: true */}
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}  

        <main className="content-section">
          <Switch>
              <Route path="/post">
                <PostForm />              
              </Route>             
              <Route path="/about">
                <About />
              </Route>
              <Route path="/story/:storyid" component={story}/>                             
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>          
        
    </Router>    
    
  );
  }
}

export default App;
