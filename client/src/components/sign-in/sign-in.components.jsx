import React, { useState } from 'react';
import './sign-in.styles.scss';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value })
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          label='email'
          type='email'
          value={email}
          handleChange={handleChange}
          autoComplete="username"
          required
        />
        <FormInput
          name='password'
          label='password'
          type='password'
          value={password}
          handleChange={handleChange}
          autoComplete="current-password"
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>
            Sign in
          </CustomButton>
          <CustomButton
            type='button'
            googleButton
            onClick={googleSignInStart}
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);