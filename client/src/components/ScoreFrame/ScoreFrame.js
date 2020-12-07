import React from 'react';
import Scores from '../Scores/Scores';
import classes from './ScoreFrame.module.css';



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