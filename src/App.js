import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import { Header } from "./components/Header/Header";
import { text } from "./TextSamples";
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
    <div className="App">
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main className="main">
        <Header headerText={text.headerHome}/>
        <p>{text.textHome}</p>
      </main>
    </div>
  );
  }
}

export default App;
