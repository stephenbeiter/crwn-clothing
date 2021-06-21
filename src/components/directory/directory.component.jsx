import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => (
  <div className='directory-menu'>
    {this.state.sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = () => 

export default Directory;