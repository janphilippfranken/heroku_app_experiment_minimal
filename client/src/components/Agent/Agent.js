import React from 'react';

import classes from './Agent.module.css';

const Agent = props => {
    return (
        <div className={[classes.Agent,classes[props.agent_id]].join(" ")} style={{backgroundColor: props.color, width: props.width}}>
        {props.children}
        
        </div>
    );
  
    
};

export default Agent; 