import React from 'react';

import classes from './ScrollDivision.module.css';

const scrollDivision = ( props ) => {
  return (
    <div className={classes.ScrollDivision} onScroll={props.scroll}>{props.children}</div>
  );
}

export default scrollDivision;
