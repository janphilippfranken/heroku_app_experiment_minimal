import React from 'react';

import classes from './Scores.module.css';

const Scores = props => {
    return (
        <div className={[classes.Scores,classes[props.score_id]].join(" ")}>
        {props.children}
  
        </div>
    );
  
    
};

export default Scores; 