import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Agent from '../Agent/Agent';
import Button from '../../components/Button/Button';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import classes from './GameFrame.module.css';
import blueFishImage from '../../static/images/blue_fish.png';
import redFishImage from '../../static/images/red_fish.png';
    


const GameFrame = props => {

    

    
    const colors = {red: 'RED', deepskyblue: 'BLUE'};
    const dispatch = useDispatch();
    const scenario = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber]);
    console.log(scenario);
    const fish = scenario.targetBelief;

    const displayFish = {'red': ['', 'none'],
                         'deepskyblue': ['none', '']};

    const setColors = () => {
        setColorB(scenario.neighbourBeliefs.a[scoreCounter]);
        setColorC(scenario.neighbourBeliefs.b[scoreCounter]);
        setOpacityB(scenario.neighbourBeliefs.ac[scoreCounter]/3);
        setOpacityC(scenario.neighbourBeliefs.bc[scoreCounter]/3);
        setColorMessageB(scenario.neighbourBeliefs.ac[scoreCounter]);
        setColorMessageC(scenario.neighbourBeliefs.bc[scoreCounter]);
        setDisplayObserve('none');
        setDisplayNext(''); 
    };

    const resetColors = () => {
        setColorB('lightgrey');
        setColorC('lightgrey');
        setOpacityB(1);
        setOpacityC(1);
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
    const [opacityB, setOpacityB] = useState(1/3)
    const [opacityC, setOpacityC] = useState(1/3)
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
            <Agent width={'400px'} agent_id="instr_frame" >SIGNALS OF CREW MEMBERS</Agent> 

            {/* legend */}
            {/* <Agent width={'200px'} top={'76%'} left={'1%'} agent_id="legend" >LEGEND:</Agent>  */}
            <Agent width={'400px'} top={'80%'} left={'1%'} agent_id="legendC" >1 (very unconfident) - 3 (very confident)</Agent> 
           {/* legend */}
           <Agent width={'200px'} top={'-10%'} left={'70%'} agent_id="legend" >YOUR FISH:</Agent> 
            <Agent width={'100px'} top={'-8%'} left={'88%'} agent_id="Fish" display={displayFish[fish][0]}>
            <img position={'absolute'} left={'0%'} top={'0%'} height={'75px'} src={redFishImage} alt="fish"/>
            </Agent>
            <Agent width={'100px'} top={'-8%'} left={'88%'} agent_id="Fish" display={displayFish[fish][1]}>
            <img position={'absolute'} top={'0%'} left={'0%'} height={'75px'} src={blueFishImage} alt="fish"/>
            </Agent>


            {/* agent B */}
            <Agent opacity={opacityB} color={colorB} agent_id="B_2"></Agent>
            <Agent  opacity={'1'} agent_id="B_22">{sayColorB}</Agent>
            <Agent agent_id="B_2name">{scenario.neighbour1Name.name}</Agent>

            
            {/* agent C */}
            <Agent color={colorC} opacity={opacityC} agent_id="C_2"></Agent>
            <Agent  opacity={'1'} agent_id="C_22">{sayColorC}</Agent>
            <Agent agent_id="C_2name">{scenario.neighbour2Name.name}</Agent>

            {/* score history */}
            <Scores score_id="instr_frame" >SIGNAL SUMMARY</Scores> 
            <Scores score_id="B_name" >{scenario.neighbour1Name.name}</Scores>
            <Scores score_id="C_name" >{scenario.neighbour2Name.name}</Scores>

            
              {/* B Scores */}
              <Scores background={scenario.neighbourBeliefs.a[0]} opacity={scenario.neighbourBeliefs.ac[0]/3} id="B1" score_id="B1"  top={'15%'} display={displayB1} >{scenario.neighbourBeliefs.ac[0].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'15%'} display={displayB1}  >{scenario.neighbourBeliefs.ac[0].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[1]} opacity={scenario.neighbourBeliefs.ac[1]/3} id="B2" score_id="B1"   top={'22%'} display={displayB2} >{scenario.neighbourBeliefs.ac[1].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'22%'} display={displayB2} >{scenario.neighbourBeliefs.ac[1].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[2]} opacity={scenario.neighbourBeliefs.ac[2]/3} id="B3" score_id="B1"  top={'29%'} display={displayB3} >{scenario.neighbourBeliefs.ac[2].toString()}</Scores>  
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'29%'} display={displayB3} >{scenario.neighbourBeliefs.ac[2].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[3]} opacity={scenario.neighbourBeliefs.ac[3]/3} id="B4" score_id="B1"  top={'36%'} display={displayB4} >{scenario.neighbourBeliefs.ac[3].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'36%'} display={displayB4} >{scenario.neighbourBeliefs.ac[3].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[4]} opacity={scenario.neighbourBeliefs.ac[4]/3} id="B5" score_id="B1"  top={'44%'} display={displayB5} >{scenario.neighbourBeliefs.ac[4].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'44%'} display={displayB5} >{scenario.neighbourBeliefs.ac[4].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[5]} opacity={scenario.neighbourBeliefs.ac[5]/3} id="B6" score_id="B1"  top={'51%'} display={displayB6} >{scenario.neighbourBeliefs.ac[5].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'51%'} display={displayB6}>{scenario.neighbourBeliefs.ac[5].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[6]} opacity={scenario.neighbourBeliefs.ac[6]/3} id="B7" score_id="B1"  top={'58%'} display={displayB7}>{scenario.neighbourBeliefs.ac[6].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'58%'} display={displayB7}>{scenario.neighbourBeliefs.ac[6].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[7]} opacity={scenario.neighbourBeliefs.ac[7]/3} id="B8" score_id="B1"  top={'65%'} display={displayB8}>{scenario.neighbourBeliefs.ac[7].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'65%'} display={displayB8}>{scenario.neighbourBeliefs.ac[7].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[8]} opacity={scenario.neighbourBeliefs.ac[8]/3} id="B9" score_id="B1" top={'72%'} display={displayB9}>{scenario.neighbourBeliefs.ac[8].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'72%'} display={displayB9} >{scenario.neighbourBeliefs.ac[8].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[9]} opacity={scenario.neighbourBeliefs.ac[9]/3} id="B10" score_id="B1" top={'79%'} display={displayB10}>{scenario.neighbourBeliefs.ac[9].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'79%'} display={displayB10}>{scenario.neighbourBeliefs.ac[9].toString()}</Scores> 
    

            {/* C scores  */}
            <Scores background={scenario.neighbourBeliefs.b[0]} opacity={scenario.neighbourBeliefs.bc[0]/3} id="C1" score_id="C1" top={'15%'} display={displayC1}>{scenario.neighbourBeliefs.bc[0].toString()}</Scores>  
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'15%'} display={displayC1}>{scenario.neighbourBeliefs.bc[0].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[1]} opacity={scenario.neighbourBeliefs.bc[1]/3} id="C2" score_id="C1"  top={'22%'} display={displayC2}>{scenario.neighbourBeliefs.bc[1].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'22%'} display={displayC2}>{scenario.neighbourBeliefs.bc[1].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[2]} opacity={scenario.neighbourBeliefs.bc[2]/3} id="C3" score_id="C1" top={'29%'} display={displayC3}>{scenario.neighbourBeliefs.bc[2].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'29%'} display={displayC3}>{scenario.neighbourBeliefs.bc[2].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[3]} opacity={scenario.neighbourBeliefs.bc[3]/3} id="C4" score_id="C1"  top={'36%'} display={displayC4}>{scenario.neighbourBeliefs.bc[3].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'36%'} display={displayC4}>{scenario.neighbourBeliefs.bc[3].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[4]} opacity={scenario.neighbourBeliefs.bc[4]/3} id="C5" score_id="C1"  top={'44%'} display={displayC5}>{scenario.neighbourBeliefs.bc[4].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'44%'} display={displayC5}>{scenario.neighbourBeliefs.bc[4].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[5]} opacity={scenario.neighbourBeliefs.bc[5]/3} id="C6" score_id="C1"  top={'51%'} display={displayC6}>{scenario.neighbourBeliefs.bc[5].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'51%'} display={displayC6}>{scenario.neighbourBeliefs.bc[5].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[6]} opacity={scenario.neighbourBeliefs.bc[6]/3} id="C7" score_id="C1"  top={'58%'} display={displayC7}>{scenario.neighbourBeliefs.bc[6].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'58%'} display={displayC7}>{scenario.neighbourBeliefs.bc[6].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[7]} opacity={scenario.neighbourBeliefs.bc[7]/3} id="C8" score_id="C1"  top={'65%'} display={displayC8}>{scenario.neighbourBeliefs.bc[7].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'65%'} display={displayC8}>{scenario.neighbourBeliefs.bc[7].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[8]} opacity={scenario.neighbourBeliefs.bc[8]/3} id="C9" score_id="C1"  top={'72%'} display={displayC9}>{scenario.neighbourBeliefs.bc[8].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'72%'} display={displayC9}>{scenario.neighbourBeliefs.bc[8].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[9]} opacity={scenario.neighbourBeliefs.bc[9]/3} id="C10" score_id="C1" top={'79%'} display={displayC10}>{scenario.neighbourBeliefs.bc[9].toString()}</Scores>   
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'79%'} display={displayC10}>{scenario.neighbourBeliefs.bc[9].toString()}</Scores> 
    
    

            {/* actions */}
            <Action onClick={setColors} opacity={1} display={displayObserve} action_id="button">Observe</Action>
            <Action onClick={resetColors} opacity={1} display={displayNext} action_id="button">Next Round</Action>
            <Action action_id="border_frame"></Action>
            
           

            <Button disabled={buttonDisplay} position={'absolute'} left={'40%'} top={'105%'} clicked={hideHistory}>Next</Button>
        </div>
        
    );
};


export default GameFrame; 




