import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { firestore } from '../../firebase/firebase.utils';

import './form.styles.scss';

import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import { Header } from '../Header/Header';
import CustomButton from '../custom-button/custom-button.component';



class NewForm extends React.Component {
    constructor(props){
        super();

        this.state = {
            title:'',
            story:''          
            // currentUser: props.currentUser
        }
    }   

     

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = async event => {
        event.preventDefault();        
        const { title, story } = this.state;
        const { currentUser } = this.props;

        if(currentUser){
            const createdAt  = new Date();
        
                
            try{
                await firestore.collection(`users/${currentUser.id}/stories/`).add({
                    title: title,
                    story: story,
                    name: currentUser.displayName,
                    userId: currentUser.id,
                    created: createdAt
                });
                
                this.props.history.push('/');
            }catch(error){
                console.log(error);
            }
        }else{
            alert('You need to sign in first!')
        }       
        
   }
    

    render(){
        
        return (
            <div className='new-form-group'>              
                
                    <Header  headerText="Share your story with the world!"/> 
                
                            
                
                    <form className='new-form'onSubmit={this.handleSubmit} noValidate>
                        <div className='title-container'>
                            <FormInput 
                                name='title'
                                type='text'
                                handleChange={this.handleChange}
                                value={this.state.title}
                                required
                                label='Title'
                            />
                        </div>

                        <div className='textarea-container'>
                            <FormTextarea 
                                name='story'                   
                                handleChange={this.handleChange}
                                value={this.state.story}
                                required
                                label='Story'
                                rows='8'
                            />
                            <CustomButton 
                                type='submit'
                                children='Post your story'                            
                            />
                        </div>                        
                        
                    </form>                  
                    
            </div>        
        )
    }   

} 

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default withRouter(connect(mapStateToProps)(NewForm));
