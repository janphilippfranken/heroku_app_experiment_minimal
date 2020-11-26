import React from 'react';

import classes from './Agent.module.css';

const Agent = props => {
    return (
        <div className={[classes.Agent,classes[props.agent_id]].join(" ")}>
        {props.children}
  
        </div>
    );
  
    
};

export default Agent; 