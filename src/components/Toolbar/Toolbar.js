import React from 'react';
import './Toolbar.scss';
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

const toolbar = ({ drawerClickHandler, currentUser }) => {    
    
    return (
    
    <header className='toolbar'>    
           
            
            <div className='toolbar__logo'>
                <Link to='/'><i className='fas fa-user-secret fa-1x'></i>classified</Link>
            </div>
            
            <div className='options'>                
                <Link className='option' to='/'>HOME</Link>
                <Link className='option' to='/about'>ABOUT</Link>                 
                
                {currentUser ?
                    (<div className='optional-options'>
                        <Link className='option' to='/post'>POST A STORY</Link>
                        <div className='option'  onClick={()=>auth.signOut()}>SIGN OUT</div>
                    </div>)
                    
                    :
                    (<Link className='option' to='/sign'>SIGN IN</Link>)   
                }                            
            </div>
            
            <div className='toolbar__toggle-button'>
                <SideDrawerToggleButton click={drawerClickHandler} />
            </div>
        
    </header>
)}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(toolbar);