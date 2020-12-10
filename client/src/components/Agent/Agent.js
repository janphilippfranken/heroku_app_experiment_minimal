import React from 'react';

import classes from './Agent.module.css';

const Agent = props => {
    return (
        <div className={[classes.Agent,classes[props.agent_id]].join(" ")} style={{backgroundColor: props.color, left:props.left, width: props.width, top: props.top}}>
        {props.children}
        
        </div>
    );
  
    
};

export default Agent; 