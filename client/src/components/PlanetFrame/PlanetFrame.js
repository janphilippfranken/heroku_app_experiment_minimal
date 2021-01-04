import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Agent from '../Agent/Agent';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import { useDispatch, useSelector } from 'react-redux';
import classes from './PlanetFrame.module.css';
import { storeSELECTION } from '../../store/actions/participantData';
import blueFishImage from '../../static/images/blue_fish.png';
import redFishImage from '../../static/images/red_fish.png';



const PlanetFrame = props => {
    const dispatch = useDispatch();
    const conditionNumber = useSelector(state => state.conditionData.conditionNumber);
    const scenario = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber]);
    const [buttonDisplay, setButtonDisplay] = useState('none');
    const [confDisplay, setConfDisplay]= useState('none');
    const fish = scenario.targetBelief;

    const displayFish = {'red': ['', 'none'],
                         'deepskyblue': ['none', '']};

    const selectPlanetRED = () => {
        setPlanetSelectRED('1.0');
        setPlanetSelectBLUE('0.2');
        setConfDisplay('');
        setPlanetSelected('red')
        setConfColor('red');
    };

    const selectPlanetBLUE = () => {
        setPlanetSelectBLUE('1.0');
        setPlanetSelectRED('0.2');
        setConfDisplay('');
        setPlanetSelected('blue')
        setConfColor('deepskyblue');
    };

    const selectVeryLowConfidence = () => {
        setVeryLowConfidence('1.0');
        setLowConfidence('0.2');
        setMediumConfidence('0.2');
        setHighConfidence('0.2');
        setVeryHighConfidence('0.2');
        setButtonDisplay('');
        setConfidence(0);
    }; 


    const selectLowConfidence = () => {
        setVeryLowConfidence('0.2');
        setLowConfidence('1.0');
        setMediumConfidence('0.2');
        setHighConfidence('0.2');
        setVeryHighConfidence('0.2');
        setButtonDisplay('');
        setConfidence(1);
    }; 

    const selectMediumConfidence = () => {
        setVeryLowConfidence('0.2');
        setLowConfidence('0.2');
        setMediumConfidence('1.0');
        setHighConfidence('0.2');
        setVeryHighConfidence('0.2');
        setButtonDisplay('');
        setConfidence(2);
    }; 

    const selectHighConfidence = () => {
        setVeryLowConfidence('0.2');
        setLowConfidence('0.2');
        setMediumConfidence('0.2');
        setHighConfidence('1.0');
        setVeryHighConfidence('0.2');
        setButtonDisplay('');
        setConfidence(3);
    }; 

    const selectVeryHighConfidence = () => {
        setVeryLowConfidence('0.2');
        setLowConfidence('0.2');
        setMediumConfidence('0.2');
        setHighConfidence('0.2');
        setVeryHighConfidence('1.0');
        setButtonDisplay('');
        setConfidence(4);
    }; 
    

    const [PlanetSelectRED, setPlanetSelectRED] = useState('.2');
    const [PlanetSelectBLUE, setPlanetSelectBLUE] = useState('.2');
    const [veryLowConfidence, setVeryLowConfidence] = useState('.2');
    const [lowConfidence, setLowConfidence] = useState('.2');
    const [mediumConfidence, setMediumConfidence] = useState('.2');
    const [highConfidence, setHighConfidence] = useState('.2');
    const [veryHighConfidence, setVeryHighConfidence] = useState('.2');
    const [confidence, setConfidence] = useState('0');
    const [planetSelected, setPlanetSelected] = useState('none');
    const [confColor, setConfColor] = useState('grey');

    const onNextHandler = () => {
        dispatch(storeSELECTION({selectedPlanet: planetSelected, confidence: confidence, conditionNumber: conditionNumber}));
        props.goToGame();
        setButtonDisplay('none');
        setPlanetSelectBLUE('0.2');
        setPlanetSelectRED('0.2');
        setConfDisplay('none');
        setVeryLowConfidence('0.2');
        setLowConfidence('0.2');
        setMediumConfidence('0.2');
        setHighConfidence('0.2');
        setVeryHighConfidence('0.2');
    };
  
   
    return (
        <div className={classes.PlanetFrame} style={{display: props.display}}>
            {/* game interface */}
            <Agent left={'7%'} width={'35rem'} agent_id="instr_frame" >Which Planet did the fisherman travel?</Agent> 
            
            {/* Planet Blue */}
            <Agent onClick={selectPlanetBLUE} top={'8%'} left={scenario.planetPosition[0]} opacity={PlanetSelectBLUE} agent_id="BPlanet">
                <h3>BLUE</h3>    
            </Agent> 
            

            {/* Planet Red */}
            <Agent onClick={selectPlanetRED} top={'8%'} left={scenario.planetPosition[1]} opacity={PlanetSelectRED} agent_id="RPlanet" >
                <h3>RED</h3> 
            </Agent> 
            
            <Agent display={confDisplay} left={'6%'} top={'57%'} width={'35rem'} agent_id="instr_frame" >How confident are you?</Agent> 
            

            {/* Confidence */}
            {/* <Action display={confDisplay}  onClick={selectVeryLowConfidence} opacity={veryLowConfidence} action_id='ConfidenceVeryLow'>Not Confident at all</Action> */}
            <Action background={confColor} display={confDisplay}  onClick={selectLowConfidence} opacity={lowConfidence} action_id='ConfidenceLow'>1 (very unconfident)</Action>
            <Action background={confColor} display={confDisplay}  onClick={selectMediumConfidence} opacity={mediumConfidence} action_id='ConfidenceMedium'>2</Action>
            <Action background={confColor} display={confDisplay}  onClick={selectHighConfidence} opacity={highConfidence} action_id='ConfidenceHigh'>3 (very confident)</Action>
            {/* <Action display={confDisplay}  onClick={selectVeryHighConfidence} opacity={veryHighConfidence} action_id='ConfidenceVeryHigh'>Highly Confident</Action> */}

            {/* Scores */}
            {/* score history */}
            <Scores score_id="instr_frame" >HISTORY</Scores> 
            <Scores score_id="B_name" >{scenario.neighbour1Name.name}</Scores>
            <Scores score_id="C_name" >{scenario.neighbour2Name.name}</Scores>

           
            {/* B Scores */}
            <Scores background={scenario.neighbourBeliefs.a[0]} id="B1" score_id="B1" >{scenario.neighbourBeliefs.ac[0].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[1]} id="B2" score_id="B1"   top={'17%'} >{scenario.neighbourBeliefs.ac[1].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[2]} id="B3" score_id="B1"  top={'24%'} >{scenario.neighbourBeliefs.ac[2].toString()}</Scores>  
            <Scores background={scenario.neighbourBeliefs.a[3]} id="B4" score_id="B1"  top={'31%'} >{scenario.neighbourBeliefs.ac[3].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[4]} id="B5" score_id="B1"  top={'39%'} >{scenario.neighbourBeliefs.ac[4].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[5]} id="B6" score_id="B1"  top={'46%'} >{scenario.neighbourBeliefs.ac[5].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[6]} id="B7" score_id="B1"  top={'53%'} >{scenario.neighbourBeliefs.ac[6].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[7]} id="B8" score_id="B1"  top={'60%'} >{scenario.neighbourBeliefs.ac[7].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[8]} id="B9" score_id="B1" top={'67%'} >{scenario.neighbourBeliefs.ac[8].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[9]} id="B10" score_id="B1" top={'74%'} >{scenario.neighbourBeliefs.ac[9].toString()}</Scores> 

    

            {/* C scores  */}
            <Scores background={scenario.neighbourBeliefs.b[0]} id="C1" score_id="C1" >{scenario.neighbourBeliefs.bc[0].toString()}</Scores>  
            <Scores background={scenario.neighbourBeliefs.b[1]} id="C2" score_id="C1"  top={'17%'}>{scenario.neighbourBeliefs.bc[1].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[2]} id="C3" score_id="C1"  top={'24%'} >{scenario.neighbourBeliefs.bc[2].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[3]} id="C4" score_id="C1"  top={'31%'} >{scenario.neighbourBeliefs.bc[3].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[4]} id="C5" score_id="C1"  top={'39%'} >{scenario.neighbourBeliefs.bc[4].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[5]} id="C6" score_id="C1" top={'46%'} >{scenario.neighbourBeliefs.bc[5].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[6]} id="C7" score_id="C1"  top={'53%'} >{scenario.neighbourBeliefs.bc[6].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[7]} id="C8" score_id="C1"  top={'60%'} >{scenario.neighbourBeliefs.bc[7].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[8]} id="C9" score_id="C1"  top={'67%'} >{scenario.neighbourBeliefs.bc[8].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[9]} id="C10" score_id="C1" top={'74%'} >{scenario.neighbourBeliefs.bc[9].toString()}</Scores>   

            {/* legend */}
            <Agent width={'200px'} top={'65%'} left={'1%'} agent_id="legend" >YOUR FISH:</Agent> 
            <Agent width={'100px'} top={'72%'} left={'0%'} agent_id="Fish" display={displayFish[fish][0]}>
            <img position={'absolute'} left={'80%'} top={'50%'} height={'50px'} src={redFishImage} alt="fish"/>
            </Agent>
            <Agent width={'100px'} top={'72%'} left={'0%'} agent_id="Fish" display={displayFish[fish][1]}>
            <img position={'absolute'} left={'80%'} top={'50%'} height={'50px'} src={blueFishImage} alt="fish"/>
            </Agent>

    

            
          

            <Action action_id="border_frame"></Action>

            {props.children}

            <Button disabled={buttonDisplay} position={'absolute'} left={'40%'} top={'105%'} clicked={onNextHandler}>Next</Button>
        </div>
        
    );
};


export default PlanetFrame; 


