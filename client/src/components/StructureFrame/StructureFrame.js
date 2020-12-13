import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeSTRUCTURE } from '../../store/actions/participantData';
import Agent from '../Agent/Agent';
import Button from '../../components/Button/Button';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import classes from './StructureFrame.module.css';



const StructureFrame = props => {

    const dispatch = useDispatch();
    const conditionNumber = useSelector(state => state.conditionData.conditionNumber);
    const scenario = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber]);
    const [buttonDisplay, setButtonDisplay] = useState('none');

    const selectNoLink = () => {
        setNoLink('1.0');
        setLRLink('.2');
        setRLLink('.2');
        setBothLink('.2');
        setSelectedStructure('0')
        setButtonDisplay('');

    };

    const selectLRLink = () => {
        setNoLink('0.2');
        setLRLink('1.0');
        setRLLink('.2');
        setBothLink('.2');
        setSelectedStructure('1')
        setButtonDisplay('');
    };

    const selectRLLink = () => {
        setNoLink('0.2');
        setLRLink('.2');
        setRLLink('1.0');
        setBothLink('.2');
        setSelectedStructure('2')
        setButtonDisplay('');
    };

    const selectBothLink = () => {
        setNoLink('0.2');
        setLRLink('.2');
        setRLLink('.2');
        setBothLink('1.0');
        setSelectedStructure('3')
        setButtonDisplay('');
    };

    const [noLink, setNoLink] = useState('0.2');
    const [LRLink, setLRLink] = useState('0.2');
    const [RLLink, setRLLink] = useState('0.2');
    const [BothLink, setBothLink] = useState('0.2');
    const [selectedStructure, setSelectedStructure] = useState('0'); // 0 = independent, 1 = lr, 2 =rl, 3=both

    const onNextHandler = () => {
        dispatch(storeSTRUCTURE({causalStructure: selectedStructure, conditionNumber: conditionNumber}));
        console.log(selectedStructure);
        props.goToGame();
        setNoLink('0.2');
        setLRLink('0.2');
        setRLLink('0.2');
        setBothLink('0.2');
        setButtonDisplay('none');
    };
    

    return (
        <div className={classes.GameFrame} style={{display: props.display}}>
            {/* game interface */}

            <Agent width={'40rem'} left={'3%'} agent_id="instr_frame" >Did {scenario.neighbour1Name.name} and {scenario.neighbour2Name.name} talk? <br /> (click on statement)</Agent> 
            
            {/* agent B */}
            <Agent agent_id="B_2">{scenario.neighbour1Name.name}</Agent>
            <Agent agent_id="B_2" top={'29%'}>{scenario.neighbour1Name.name}</Agent>
            <Agent agent_id="B_2" top={'49%'}>{scenario.neighbour1Name.name}</Agent>
            <Agent agent_id="B_2" top={'69%'}>{scenario.neighbour1Name.name}</Agent>

            {/* agent C */}
            <Agent agent_id="C_2">{scenario.neighbour2Name.name}</Agent>
         
            <Agent agent_id="C_2" top={'29%'}>{scenario.neighbour2Name.name}</Agent>
            <Agent agent_id="C_2" top={'49%'}>{scenario.neighbour2Name.name}</Agent>
            <Agent agent_id="C_2" top={'69%'}>{scenario.neighbour2Name.name}</Agent>

           

            {/* Connections */}
            <Agent onClick={selectNoLink} opacity={noLink} agent_id="ConnectionTail" left={'22.5%'} top={scenario.structureOrder[0][0]} width={'14rem'}>No Conversation</Agent>
            <Agent onClick={selectLRLink} opacity={LRLink} agent_id="ConnectionTail" left={'22.5%'} top={scenario.structureOrder[1][0]} width={'14rem'}>{scenario.neighbour1Name.name} talked to {scenario.neighbour2Name.name}</Agent>
            <Agent onClick={selectRLLink}  opacity={RLLink}  agent_id="ConnectionTail" left={'22.5%'} top={scenario.structureOrder[2][0]} width={'14rem'}>{scenario.neighbour2Name.name} talked to {scenario.neighbour1Name.name}</Agent>
            <Agent onClick={selectBothLink} opacity={BothLink} agent_id="ConnectionTail" left={'22.5%'} top={scenario.structureOrder[3][0]} width={'14rem'}>Both talked to each other</Agent>

            
            <Agent agent_id="ConnectionR" left={'43%'} top={scenario.structureOrder[1][1]}> </Agent>
            <Agent agent_id="ConnectionR" left={'43%'} top={scenario.structureOrder[3][1]}> </Agent>
            <Agent agent_id="ConnectionL" left={'19%'} top={scenario.structureOrder[2][1]}> </Agent>
            <Agent agent_id="ConnectionL" left={'19%'} top={scenario.structureOrder[3][1]}> </Agent>
            

            
        

            {/* Scores */}
            {/* score history */}
            <Scores score_id="instr_frame" >HISTORY</Scores> 
            <Scores score_id="B_name" >{scenario.neighbour1Name.name}</Scores>
            <Scores score_id="C_name" >{scenario.neighbour2Name.name}</Scores>

            {/* B Scores */}
            <Scores background={scenario.neighbourBeliefs.a[0]} id="B1" score_id="B1" ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[1]} id="B2" score_id="B1"   top={'17%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[2]} id="B3" score_id="B1"  top={'24%'} ></Scores>  
            <Scores background={scenario.neighbourBeliefs.a[3]} id="B4" score_id="B1"  top={'31%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[4]} id="B5" score_id="B1"  top={'39%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[5]} id="B6" score_id="B1" top={'46%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[6]} id="B7" score_id="B1" top={'53%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[7]} id="B8" score_id="B1"  top={'60%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[8]} id="B9" score_id="B1"  top={'67%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.a[9]} id="B10" score_id="B1"  top={'74%'} ></Scores> 

    
    

            {/* C scores  */}
            <Scores background={scenario.neighbourBeliefs.b[0]} id="C1" score_id="C1" ></Scores>  
            <Scores background={scenario.neighbourBeliefs.b[1]} id="C2" score_id="C1"  top={'17%'}></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[2]} id="C3" score_id="C1"  top={'24%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[3]} id="C4" score_id="C1"  top={'31%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[4]} id="C5" score_id="C1"  top={'39%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[5]} id="C6" score_id="C1"  top={'46%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[6]} id="C7" score_id="C1"  top={'53%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[7]} id="C8" score_id="C1"  top={'60%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[8]} id="C9" score_id="C1"  top={'67%'} ></Scores> 
            <Scores background={scenario.neighbourBeliefs.b[9]} id="C10" score_id="C1"  top={'74%'} ></Scores>   

            
          

            <Action action_id="border_frame"></Action>

            <Button disabled={buttonDisplay} position={'absolute'} left={'40%'} top={'105%'} clicked={onNextHandler}>Next</Button>

            {props.children}

        </div>
        
    );
};


export default StructureFrame; 


