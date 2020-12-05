import React from 'react';

import classes from './Action.module.css';

const Action = props => {
    return (
        <div className={[classes.Action,classes[props.action_id]].join(" ")}>
        {props.children}
  
        </div>
    );
    
};



export default Action; 