import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(){
        super()

        this.state = {            
            email: '',
            password: ''            
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''});
    }


    render(){
        const {email, password} = this.state;

        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>

                <form className='sign-in-form' noValidate onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        required
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                    />

                    <FormInput 
                        name='password'
                        type='password'
                        required
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} type='button' isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>                    

                </form>
            </div>
        )
    }




}

export default SignIn;