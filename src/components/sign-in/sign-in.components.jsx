import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h1>I already have an account</h1>
        <h2>Sign in with your email and password</h2>

        <form onSubmit={this.handleSubmit}>

          <FormInput
            name='email'
            label='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            label='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>
            Sign In
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;