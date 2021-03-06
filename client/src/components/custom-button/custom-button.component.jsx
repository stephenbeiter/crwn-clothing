import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, googleButton, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${googleButton ? 'google-button' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;