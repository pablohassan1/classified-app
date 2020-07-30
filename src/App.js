import React, { Component } from "react";
import {  BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About"; 
import { Post } from "./components/Post/Post";

//36.42

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState(() => ({sideDrawerOpen: false}));
  };


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){      
      backdrop = <Backdrop backDropClick={this.backdropClickHandler}/>;
    }

  return (
    <Router>
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}      
        <main className="content-section">
          <Switch>
              <Route path="/post">
                <Post />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
          <p className="footer">© Jan Brezina 2020</p>   
        </div>      
    </Router> 
    
  );
  }
}

export default App;
