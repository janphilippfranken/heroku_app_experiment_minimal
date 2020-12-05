import React from 'react';

import ScrollDivision from '../ScrollDivision/ScrollDivision';

import classes from './Frame.module.css';

const frame = ( props ) => {
  return (
    <div className={classes.Frame}>
      <h1>{props.frameTitle}</h1>
      <ScrollDivision>{props.children}</ScrollDivision>
    </div>
  );
}


export default frame;
