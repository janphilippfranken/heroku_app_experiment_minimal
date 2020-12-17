import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Agent from '../Agent/Agent';
import Button from '../../components/Button/Button';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import classes from './GameFrame.module.css';

    


const GameFrame = props => {

    
    const colors = {red: 'RED', deepskyblue: 'BLUE'};
    const dispatch = useDispatch();
    const scenario = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber]);


    const setColors = () => {
        setColorB(scenario.neighbourBeliefs.a[scoreCounter]);
        setColorC(scenario.neighbourBeliefs.b[scoreCounter]);
        setColorMessageB(colors[scenario.neighbourBeliefs.a[scoreCounter]]);
        setColorMessageC(colors[scenario.neighbourBeliefs.b[scoreCounter]]);
        setDisplayObserve('none');
        setDisplayNext('');
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
            setDisplayNext('none');
            setDisplayObserve('none');
            setButtonDisplay('');
        }
    };


    const [colorB, setColorB] = useState('lightgrey')
    const [colorC, setColorC] = useState('lightgrey')
    const [sayColorB, setColorMessageB] = useState('?')
    const [sayColorC, setColorMessageC] = useState('?')
    const [displayObserve, setDisplayObserve] = useState('true')
    const [displayNext, setDisplayNext] = useState('none')
    const [scoreCounter, setScoreCounter] = useState(0);
    const [buttonDisplay, setButtonDisplay] = useState('none');


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

    
    const hideHistory = () => {
        setDisplayC1('none');
        setDisplayC2('none');
        setDisplayC3('none');
        setDisplayC4('none');
        setDisplayC5('none');
        setDisplayC6('none');
        setDisplayC7('none');
        setDisplayC8('none');
        setDisplayC9('none');
        setDisplayC10('none');
        setDisplayB1('none');
        setDisplayB2('none');
        setDisplayB3('none');
        setDisplayB4('none');
        setDisplayB5('none');
        setDisplayB6('none');
        setDisplayB7('none');
        setDisplayB8('none');
        setDisplayB9('none');
        setDisplayB10('none');
        props.goToGame()
        setButtonDisplay('none');
        setDisplayObserve('');
        setScoreCounter(0);
    };
  
   

    return (
        <div className={classes.GameFrame} style={{display: props.display}}>
             {props.children}
            {/* game interface */}
            <Agent width={'400px'} agent_id="instr_frame" >BELIEFS OF VILLAGERS</Agent> 
            
            {/* agent B */}
            <Agent color={colorB} agent_id="B_2">{sayColorB}</Agent>
            <Agent agent_id="B_2name">{scenario.neighbour1Name.name}</Agent>

            
            {/* agent C */}
            <Agent color={colorC} agent_id="C_2">{sayColorC}</Agent>
            <Agent agent_id="C_2name">{scenario.neighbour2Name.name}</Agent>

            {/* score history */}
            <Scores score_id="instr_frame" >HISTORY</Scores> 
            <Scores score_id="B_name" >{scenario.neighbour1Name.name}</Scores>
            <Scores score_id="C_name" >{scenario.neighbour2Name.name}</Scores>

            {/* B Scores */}
            <Scores background={scenario.neighbourBeliefs.a[0]} id="B1" score_id="B1" display={displayB1}></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[1]} id="B2" score_id="B1" display={displayB2}  top={'17%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[2]} id="B3" score_id="B1" display={displayB3} top={'24%'} ></Scores>  
            <Scores background={scenario.neighbourBeliefs.a[3]} id="B4" score_id="B1" display={displayB4} top={'31%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[4]} id="B5" score_id="B1" display={displayB5} top={'39%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[5]} id="B6" score_id="B1" display={displayB6} top={'46%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[6]} id="B7" score_id="B1" display={displayB7} top={'53%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[7]} id="B8" score_id="B1" display={displayB8} top={'60%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[8]} id="B9" score_id="B1" display={displayB9} top={'67%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[9]} id="B10" score_id="B1" display={displayB10} top={'74%'} ></Scores> 

    

            {/* C scores  */}
            <Scores background={scenario.neighbourBeliefs.b[0]} id="C1" score_id="C1" display={displayC1}></Scores>  
            <Scores background={scenario.neighbourBeliefs.b[1]} id="C2" score_id="C1" display={displayC2} top={'17%'}></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[2]} id="C3" score_id="C1" display={displayC3} top={'24%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[3]} id="C4" score_id="C1" display={displayC4} top={'31%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[4]} id="C5" score_id="C1" display={displayC5} top={'39%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[5]} id="C6" score_id="C1" display={displayC6} top={'46%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[6]} id="C7" score_id="C1" display={displayC7} top={'53%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[7]} id="C8" score_id="C1" display={displayC8} top={'60%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[8]} id="C9" score_id="C1" display={displayC9} top={'67%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[9]} id="C10" score_id="C1" display={displayC10} top={'74%'} ></Scores>   

    

            {/* actions */}
            <Action onClick={setColors} display={displayObserve} action_id="button">Observe Beliefs</Action>
            <Action onClick={resetColors} display={displayNext} action_id="button">Next Round</Action>
            <Action action_id="border_frame"></Action>
            
           

            <Button disabled={buttonDisplay} position={'absolute'} left={'40%'} top={'105%'} clicked={hideHistory}>Next</Button>
        </div>
        
    );
};


export default GameFrame; 




