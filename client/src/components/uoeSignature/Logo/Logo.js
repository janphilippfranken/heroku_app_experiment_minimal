import React from 'react';
import uoeLogo from '../../../static/images/logo.png';
import classes from './Logo.module.css';

const logo = ( props ) => {
  return (
    <div className={classes.Logo}>
      <img src={uoeLogo} alt="uoeLogo" />
    </div>
  );
}


export default logo;
