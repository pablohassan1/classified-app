import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component {
    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]:value});
    }

    handleSubmit = event => {
        event.preventDefault();
    }


    render(){
        const {name, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span className='title'>Sign up with your name, email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit} noValidate>
                    <FormInput 
                        type='text'
                        name='name'
                        handleChange={this.handleChange}
                        label='Name'
                        required
                        value={name}
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