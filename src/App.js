import React from "react";
import {   BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.scss";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import  Home  from "./components/Home/Home";
import { About } from "./components/About/About"; 
import { PostForm } from "./components/PostForm/PostForm";
import SingleStory from "./components/SingleStory/SingleStory";
import signInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';

import { auth } from './firebase/firebase.utils';

const story = ({match})=>{
  return (
    <SingleStory 
      story={match.params.storyid}
    />
  )
}


class App extends React.Component {
constructor(){
  super();

  this.state = {
    sideDrawerOpen: false,
    currentUser: null
  }
}

unsubscribeFromAuth = null;


componentDidMount(){
  this.unsubscribeFromAuth =  auth.onAuthStateChanged(user=>{
    this.setState({currentUser: user})
    console.log(user);
  })
 }

componentWillUnmount(){
  this.unsubscribeFromAuth();
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
      <Toolbar 
      drawerClickHandler={this.drawerToggleClickHandler}
      currentUser={this.state.currentUser}
      />
      
  {/* zobrazi se pokud state.sideDrawerOpen: true */}
        <SideDrawer show={this.state.sideDrawerOpen} backdropClickHandler={this.backdropClickHandler}/>
        {backdrop}  

        
          <Switch>
            <Route exact path="/post" component={PostForm}/>                         
            <Route exact path="/about" component={About}/>
            <Route exact path="/story/:storyid" component={story}/>                             
            <Route exact path="/" component={Home}/>
            <Route exact path='/sign' component={signInPage} />
          </Switch>
               
    </Router>    
    
  );
  }
}

export default App;
