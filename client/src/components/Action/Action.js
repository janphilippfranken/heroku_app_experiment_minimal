import React from 'react';

import classes from './Action.module.css';

const Action = props => {
    return (
        <div onClick={props.onClick} className={[classes.Action,classes[props.action_id]].join(" ")} style={{background: props.background, display: props.display, opacity: props.opacity}}>
        {props.children}
        
        
  
        </div>
    );
    
};



export default Action; 