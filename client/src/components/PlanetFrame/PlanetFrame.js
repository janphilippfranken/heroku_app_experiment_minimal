import React, { useState } from 'react';
import Agent from '../Agent/Agent';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import classes from './PlanetFrame.module.css';


const PlanetFrame = props => {

    const selectPlanetRED = () => {
        setPlanetSelectRED('1.0');
        setPlanetSelectBLUE('0.2');
    };

    const selectPlanetBLUE = () => {
        setPlanetSelectBLUE('1.0');
        setPlanetSelectRED('0.2');
    };

    const selectLowConfidence = () => {
        setLowConfidence('1.0');
        setMediumConfidence('0.2');
        setHighConfidence('0.2');
    }; 

    const selectMediumConfidence = () => {
        setLowConfidence('0.2');
        setMediumConfidence('1.0');
        setHighConfidence('0.2');
    }; 

    const selectHighConfidence = () => {
        setLowConfidence('0.2');
        setMediumConfidence('0.2');
        setHighConfidence('1.0');
    }; 
    

    const [PlanetSelectRED, setPlanetSelectRED] = useState('.2');
    const [PlanetSelectBLUE, setPlanetSelectBLUE] = useState('.2');
    const [lowConfidence, setLowConfidence] = useState('.2');
    const [mediumConfidence, setMediumConfidence] = useState('.2');
    const [highConfidence, setHighConfidence] = useState('.2');
  
   
    return (
        <div className={classes.PlanetFrame} style={{display: props.display}}>
            {/* game interface */}
            <Agent left={'7%'} width={'35rem'} agent_id="instr_frame" >Which Planet did the fisherman travel?</Agent> 
            
            {/* Planet Blue */}
            <Agent onClick={selectPlanetBLUE} top={'8%'} left={'12%'} opacity={PlanetSelectBLUE} agent_id="BPlanet">
                <h3>BLUE</h3>    
            </Agent> 
            

            {/* Planet Red */}
            <Agent onClick={selectPlanetRED} top={'8%'} left={'34%'} opacity={PlanetSelectRED} agent_id="RPlanet" >
                <h3>RED</h3> 
            </Agent> 
            
            <Agent left={'6%'} top={'57%'} width={'35rem'} agent_id="instr_frame" >Select your confidence</Agent> 
            

            {/* Confidence */}
            <Action onClick={selectLowConfidence} opacity={lowConfidence} action_id='ConfidenceLow'>Low Confidence</Action>
            <Action onClick={selectMediumConfidence} opacity={mediumConfidence} action_id='ConfidenceMedium'>Medium Confidence</Action>
            <Action onClick={selectHighConfidence} opacity={highConfidence} action_id='ConfidenceHigh'>High Confidence</Action>

            {/* Scores */}
            {/* score history */}
            <Scores score_id="instr_frame" >HISTORY</Scores> 
            <Scores score_id="B_name" >NIKOS</Scores>
            <Scores score_id="C_name" >NEIL</Scores>

            {/* B Scores */}
            <Scores id="B1" score_id="B1" ></Scores> 
            <Scores id="B2"  score_id="B1"   top={'17%'} ></Scores> 
            <Scores id="B3" score_id="B1"  top={'24%'} ></Scores>  
            <Scores id="B4" score_id="B1"  top={'31%'} ></Scores> 
            <Scores id="B5" score_id="B1" top={'39%'} ></Scores> 
            <Scores id="B6" score_id="B1"  top={'46%'} ></Scores> 
            <Scores id="B7" score_id="B1"  top={'53%'} ></Scores> 
            <Scores id="B8" score_id="B1"  top={'60%'} ></Scores> 
            <Scores id="B9" score_id="B1"  top={'67%'} ></Scores> 
            <Scores id="B10" score_id="B1"  top={'74%'} ></Scores> 

    

            {/* C scores  */}
            <Scores id="C1" score_id="C1" ></Scores>  

            <Scores id="C2" score_id="C1"  top={'17%'}></Scores> 
            <Scores id="C3" score_id="C1"  top={'24%'} ></Scores> 
            <Scores id="C4" score_id="C1"  top={'31%'} ></Scores> 
            <Scores id="C5" score_id="C1"  top={'39%'} ></Scores> 
            <Scores id="C6" score_id="C1"  top={'46%'} ></Scores> 
            <Scores id="C7" score_id="C1"  top={'53%'} ></Scores> 
            <Scores id="C8" score_id="C1"  top={'60%'} ></Scores> 
            <Scores id="C9" score_id="C1" top={'67%'} ></Scores> 
            <Scores id="C10" score_id="C1" top={'74%'} ></Scores>   

    
            

            
          

            <Action action_id="border_frame"></Action>

            {props.children}
        </div>
        
    );
};


export default PlanetFrame; 


