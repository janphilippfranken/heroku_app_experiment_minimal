import React from 'react';

import classes from './Scores.module.css';

const Scores = props => {
    return (
        <div className={[classes.Scores,classes[props.score_id]].join(" ")} style={{background: props.background, position: props.position, top: props.top, display: props.display, opacity: props.opacity}}>
        {props.children}
  
        </div>
    );
  
    
};

export default Scores; 