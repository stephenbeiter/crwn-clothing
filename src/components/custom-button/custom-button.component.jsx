import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, googleButton, ...otherProps }) => (
  <button
    className={`${googleButton ? 'google-button' : ''} custom-button`}
    {...otherProps}
    type='button'
  >
    {children}
  </button>
);

export default CustomButton;