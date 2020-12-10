import React, { useState } from 'react';
import Agent from '../Agent/Agent';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import classes from './GameFrame.module.css';

    


const GameFrame = props => {
    
    const setColors = () => {
        setColorB('red');
        setColorC('deepskyblue');
        setColorMessageB('Red')
        setColorMessageC('Blue')
        setDisplayObserve('none')
        setDisplayNext('')
    };

    const resetColors = () => {
        setColorB('lightgrey');
        setColorC('lightgrey');
        setColorMessageB('?')
        setColorMessageC('?')
        setDisplayObserve('')
        setDisplayNext('none')
        setScoreCounter(scoreCounter + 1);
        if (scoreCounter === 0) {
            setDisplayB1('');
            setDisplayC1('');
        } else if (scoreCounter === 1) {
            setDisplayB2('');
            setDisplayC2('');
        } else if (scoreCounter === 2) {
            setDisplayB3('');
            setDisplayC3('');
        } else if (scoreCounter === 3) {
            setDisplayB4('');
            setDisplayC4('');
        } else if (scoreCounter === 4) {
            setDisplayB5('');
            setDisplayC5('');
        } else if (scoreCounter === 5) {
            setDisplayB6('');
            setDisplayC6('');
        } else if (scoreCounter === 6) {
            setDisplayB7('');
            setDisplayC7('');
        } else if (scoreCounter === 7) {
            setDisplayB8('');
            setDisplayC8('');
        } else if (scoreCounter === 8) {
            setDisplayB9('');
            setDisplayC9('');
        } else if (scoreCounter === 9) {
            setDisplayB10('');
            setDisplayC10('');
        }
    };


    const [colorB, setColorB] = useState('lightgrey')
    const [colorC, setColorC] = useState('lightgrey')
    const [sayColorB, setColorMessageB] = useState('?')
    const [sayColorC, setColorMessageC] = useState('?')
    const [displayObserve, setDisplayObserve] = useState('true')
    const [displayNext, setDisplayNext] = useState('none')
    const [scoreCounter, setScoreCounter] = useState(0);

    // B displays 
    const [displayB1, setDisplayB1] = useState('none');
    const [displayB2, setDisplayB2] = useState('none');
    const [displayB3, setDisplayB3] = useState('none');
    const [displayB4, setDisplayB4] = useState('none');
    const [displayB5, setDisplayB5] = useState('none');
    const [displayB6, setDisplayB6] = useState('none');
    const [displayB7, setDisplayB7] = useState('none');
    const [displayB8, setDisplayB8] = useState('none');
    const [displayB9, setDisplayB9] = useState('none');
    const [displayB10, setDisplayB10] = useState('none');

    // C displays 
    const [displayC1, setDisplayC1] = useState('none');
    const [displayC2, setDisplayC2] = useState('none');
    const [displayC3, setDisplayC3] = useState('none');
    const [displayC4, setDisplayC4] = useState('none');
    const [displayC5, setDisplayC5] = useState('none');
    const [displayC6, setDisplayC6] = useState('none');
    const [displayC7, setDisplayC7] = useState('none');
    const [displayC8, setDisplayC8] = useState('none');
    const [displayC9, setDisplayC9] = useState('none');
    const [displayC10, setDisplayC10] = useState('none');
   

    return (
        <div className={classes.GameFrame}>
            {/* game interface */}
            <Agent agent_id="instr_frame" >BELIEFS OF OTHERS</Agent> 
            
            {/* agent B */}
            <Agent color={colorB} agent_id="B_2">{sayColorB}</Agent>
            <Agent agent_id="B_2name">NIKOS</Agent>

            
            {/* agent C */}
            <Agent color={colorC} agent_id="C_2">{sayColorC}</Agent>
            <Agent agent_id="C_2name">NEIL</Agent>

            {/* score history */}
            <Scores score_id="instr_frame" >HISTORY</Scores> 
            <Scores score_id="B_name" >NIKOS</Scores>
            <Scores score_id="C_name" >NEIL</Scores>

            {/* B Scores */}
            <Scores id="B1" score_id="B1" display={displayB1}></Scores> 
            <Scores id="B2"  score_id="B1" display={displayB2}  top={'17%'} ></Scores> 
            <Scores id="B3" score_id="B1" display={displayB3} top={'24%'} ></Scores>  
            <Scores id="B4" score_id="B1" display={displayB4} top={'31%'} ></Scores> 
            <Scores id="B5" score_id="B1" display={displayB5} top={'39%'} ></Scores> 
            <Scores id="B6" score_id="B1" display={displayB6} top={'46%'} ></Scores> 
            <Scores id="B7" score_id="B1" display={displayB7} top={'53%'} ></Scores> 
            <Scores id="B8" score_id="B1" display={displayB8} top={'60%'} ></Scores> 
            <Scores id="B9" score_id="B1" display={displayB9} top={'67%'} ></Scores> 
            <Scores id="B10" score_id="B1" display={displayB10} top={'74%'} ></Scores> 

    

            {/* C scores  */}
            <Scores id="C1" score_id="C1" display={displayC1}></Scores>  

            <Scores id="C2" score_id="C1" display={displayC2} top={'17%'}></Scores> 
            <Scores id="C3" score_id="C1" display={displayC3} top={'24%'} ></Scores> 
            <Scores id="C4" score_id="C1" display={displayC4} top={'31%'} ></Scores> 
            <Scores id="C5" score_id="C1" display={displayC5} top={'39%'} ></Scores> 
            <Scores id="C6" score_id="C1" display={displayC6} top={'46%'} ></Scores> 
            <Scores id="C7" score_id="C1" display={displayC7} top={'53%'} ></Scores> 
            <Scores id="C8" score_id="C1" display={displayC8} top={'60%'} ></Scores> 
            <Scores id="C9" score_id="C1" display={displayC9} top={'67%'} ></Scores> 
            <Scores id="C10" score_id="C1" display={displayC10} top={'74%'} ></Scores>   

    
    
          

    
          

            {/* actions */}
            <Action onClick={setColors} display={displayObserve} action_id="button">Observe Beliefs</Action>
            <Action onClick={resetColors} display={displayNext} action_id="button">Next Round</Action>
            <Action action_id="border_frame"></Action>
        </div>
        
    );
};


export default GameFrame; 


