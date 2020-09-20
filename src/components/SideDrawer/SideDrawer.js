import React from "react";
import "./SideDrawer.scss";
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const sideDrawer = ({ show, backdropClickHandler, currentUser }) => {
    let drawerClasses = "side-drawer";
    if (show){
        drawerClasses = "side-drawer open";
    };

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/" onClick={backdropClickHandler}>HOME</Link></li>
                <li><Link to="/about" onClick={backdropClickHandler}>ABOUT</Link></li>

                {currentUser ?
                    <div>
                        <li><Link onClick={backdropClickHandler} to='/post'>POST A STORY</Link></li>
                        <li><Link to="/" onClick={()=>{
                            auth.signOut();
                            backdropClickHandler();
                            } }>SIGN OUT</Link></li>                    
                    </div>
                    :
                    <li><Link onClick={backdropClickHandler} to='/sign'>SIGN IN</Link></li>   
                }                            
                
            </ul>
        </nav>
    );
};


export default sideDrawer;