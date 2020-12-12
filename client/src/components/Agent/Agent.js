import React from 'react';

import classes from './Agent.module.css';

const Agent = props => {
    return (
        <div onClick={props.onClick} hover={props.hover} className={[classes.Agent,classes[props.agent_id]].join(" ")} style={{display: props.display, backgroundColor: props.color, left:props.left, width: props.width, top: props.top, opacity: props.opacity}}>
        {props.children}
        
        </div>
    );
  
    
};

export default Agent; 