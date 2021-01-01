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
      className={classesNames.join(' ')} style={{display: props.display, position: props.position, top: props.top, left: props.left}}
      onClick={props.clicked}><span>{props.children}</span></button>
  );
}

export default button;
