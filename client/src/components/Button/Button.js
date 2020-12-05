import React from 'react';

import classes from './Button.module.css';

const button = ( props ) => {
  let classesNames = [classes.Button];
  if (props.isPrevious){
    classesNames = [classes.Button, classes.ButtonPre];
  }
  return (
    <button
      disabled={props.disabled}
      className={classesNames.join(' ')}
      onClick={props.clicked}><span>{props.children}</span></button>
  );
}

export default button;
