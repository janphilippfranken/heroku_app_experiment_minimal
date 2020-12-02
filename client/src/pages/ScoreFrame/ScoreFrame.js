import React from 'react';

import classes from './ScoreFrame.module.css';
import Scores from '../Scores/Scores';


const ScoreFrame = props => {
    return (
        <div className={classes.ScoreFrame}>
            <Scores score_id="instr_frame" >HISTORY</Scores>
            <Scores score_id="B_name" >NIKOS</Scores>
            <Scores score_id="C_name" >NEIL</Scores>

            <Scores score_id="B1" ></Scores>
            <Scores score_id="C1" ></Scores>
           
            
        </div>
    );
};

export default ScoreFrame; 