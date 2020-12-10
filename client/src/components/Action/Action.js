import React from 'react';

import classes from './Action.module.css';

const Action = props => {
    return (
        <div onClick={props.onClick} className={[classes.Action,classes[props.action_id]].join(" ")} style={{display: props.display}}>
        {props.children}
        
        
  
        </div>
    );
    
};



export default Action; 