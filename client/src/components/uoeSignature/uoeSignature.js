import React from 'react';

import Signature from './Signature/Signature';
import Logo from './Logo/Logo';

import classes from './uoeSignature.module.css';

const uoeSignature = ( props ) => {
  return (
    <div className={classes.uoeSignature}>
      <Signature />
      <Logo />
    </div>
  );
}


export default uoeSignature;
