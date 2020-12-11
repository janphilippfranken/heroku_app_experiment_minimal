import React, { useState } from 'react';
import Agent from '../Agent/Agent';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import classes from './StructureFrame.module.css';


    


const StructureFrame = props => {

    const selectNoLink = () => {
        setNoLink('1.0');
        setLRLink('.2');
        setRLLink('.2');
        setBothLink('.2');
    };

    const selectLRLink = () => {
        setNoLink('0.2');
        setLRLink('1.0');
        setRLLink('.2');
        setBothLink('.2');
    };

    const selectRLLink = () => {
        setNoLink('0.2');
        setLRLink('.2');
        setRLLink('1.0');
        setBothLink('.2');
    };

    const selectBothLink = () => {
        setNoLink('0.2');
        setLRLink('.2');
        setRLLink('.2');
        setBothLink('1.0');
    };

    const [noLink, setNoLink] = useState('0.2');
    const [LRLink, setLRLink] = useState('0.2');
    const [RLLink, setRLLink] = useState('0.2');
    const [BothLink, setBothLink] = useState('0.2');
    
    return (
        <div className={classes.GameFrame} style={{display: props.display}}>
            {/* game interface */}
            <Agent left={'18%'} agent_id="instr_frame" >Did Neil and Nikos talk? (click on statement)</Agent> 
            
            {/* agent B */}
            <Agent agent_id="B_2">NIKOS</Agent>
            <Agent agent_id="B_2" top={'29%'}>NIKOS</Agent>
            <Agent agent_id="B_2" top={'49%'}>NIKOS</Agent>
            <Agent agent_id="B_2" top={'69%'}>NIKOS</Agent>

            {/* agent C */}
            <Agent agent_id="C_2">NEIL</Agent>
         
            <Agent agent_id="C_2" top={'29%'}>NEIL</Agent>
            <Agent agent_id="C_2" top={'49%'}>NEIL</Agent>
            <Agent agent_id="C_2" top={'69%'}>NEIL</Agent>

           

            {/* Connections */}
            <Agent onClick={selectNoLink} opacity={noLink} agent_id="ConnectionTail" left={'18%'} top={'13%'} width={'20rem'}>No Conversation</Agent>
            <Agent agent_id="ConnectionR" left={'45%'} top={'29%'}> </Agent>
            <Agent onClick={selectLRLink} opacity={LRLink} agent_id="ConnectionTail" left={'18%'} top={'33%'} width={'18rem'}>Nikos talked to Neil</Agent>
            <Agent agent_id="ConnectionL" left={'17.5%'} top={'49%'}> </Agent>
            <Agent onClick={selectRLLink}  opacity={RLLink}  agent_id="ConnectionTail" left={'21%'} top={'53%'} width={'18rem'}>Neil talked to Nikos </Agent>
            <Agent agent_id="ConnectionR" left={'45%'} top={'69%'}> </Agent>
            <Agent onClick={selectBothLink} opacity={BothLink} agent_id="ConnectionTail" left={'21%'} top={'73%'}>Both talked to each other</Agent>
            <Agent agent_id="ConnectionL" left={'17.5%'} top={'69%'}> </Agent>

            
        

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


export default StructureFrame; 


