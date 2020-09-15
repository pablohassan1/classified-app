import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]:value});
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        
        if (password !== confirmPassword){
            alert('Passwords do not match!');
            return;
        } 

        try{
            const { user } = await auth.createUserWithEmailAndPassword( email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } 
        catch(error){
            console.log(error);
            alert(error.message);
        }
        

    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span className='title'>Sign up with your name, email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit} noValidate>
                    <FormInput 
                        type='text'
                        name='displayName'
                        handleChange={this.handleChange}
                        label='Name'
                        required
                        value={displayName}
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        handleChange={this.handleChange}
                        label='Email'
                        required
                        value={email}
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        handleChange={this.handleChange}
                        label='Password'
                        required
                        value={password}
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        handleChange={this.handleChange}
                        label='Confirm password'
                        required
                        value={confirmPassword}
                    />

                    <CustomButton type='submit'>Sign up</CustomButton>

                </form>                
            </div>
        )
    }
}

export default SignUp;