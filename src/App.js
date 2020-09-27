import React from "react";
import {   BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { connect } from 'react-redux';

import "./App.scss";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import  Home  from "./components/Home/Home";
import { About } from "./components/About/About"; 
import NewForm from './components/new-form/new-form.component';
// import { PostForm } from "./components/PostForm/PostForm";
import SingleStory from "./components/SingleStory/SingleStory";
import signInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import { auth, createUserProfileDocument, firestore } from './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions";


const story = ({match})=>{

  return (
    <SingleStory 
      story={match.params.storyId}
      user={match.params.userId}      
    />
  )
}


class App extends React.Component {
constructor(){
  super();

  this.state = {
    sideDrawerOpen: false,      
    stories: []  
  }
}

unsubscribeFromAuth = null;
unsubscribeFromStorage = null;


componentDidMount(){
  const { setCurrentUser } = this.props;
  
  this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth=>{ 

    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
   
      userRef.onSnapshot( snapshot =>{
        setCurrentUser({ 
          id: snapshot.id,
          ...snapshot.data()
        });
      }) ;
    }else{
      setCurrentUser(userAuth);
    }
      
         
  });

  //
  this.unsubscribeFromStorage = firestore.collectionGroup('stories').onSnapshot(querySnapshot => {
    var items =[];
    querySnapshot.forEach(doc => {       
      
        items.push({userId: doc.data().userId,id:doc.id, name: doc.data().name, story:doc.data().story, title:doc.data().title })     

    });
    this.setState({stories: items});
    console.log(this.state.stories);        
  });
      
}


componentWillUnmount(){
  this.unsubscribeFromAuth();
  this.unsubscribeFromStorage();
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
      
      />
      
  {/* zobrazi se pokud state.sideDrawerOpen: true */}
        <SideDrawer show={this.state.sideDrawerOpen} backdropClickHandler={this.backdropClickHandler}/>
        {backdrop}  

        
          <Switch>
            <Route exact path="/post" component={() => <NewForm />} />                         
            <Route exact path="/about" component={About}/>
            <Route path="/story/:userId/:storyId" component={story} />                             
            <Route exact path="/" component={() => <Home stories={this.state.stories} />} />
            <Route exact path='/sign' component={signInPage} />
          </Switch>
               
    </Router>    
    
  );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
