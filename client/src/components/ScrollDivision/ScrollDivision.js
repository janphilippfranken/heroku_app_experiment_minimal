import React from 'react';

import classes from './ScrollDivision.module.css';

const scrollDivision = ( props ) => {
  return (
    <div className={classes.ScrollDivision}>{props.children}</div>
  );
}

export default scrollDivision;
