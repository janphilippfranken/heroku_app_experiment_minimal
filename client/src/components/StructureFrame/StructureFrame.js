import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeSTRUCTURE } from '../../store/actions/participantData';
import Agent from '../Agent/Agent';
import Button from '../../components/Button/Button';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import classes from './StructureFrame.module.css';
import blueFishImage from '../../static/images/blue_fish.png';
import redFishImage from '../../static/images/red_fish.png';
    



const StructureFrame = props => {

    const dispatch = useDispatch();
    const conditionNumber = useSelector(state => state.conditionData.conditionNumber);
    const scenario = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber]);
    const [buttonDisplay, setButtonDisplay] = useState('none');
    const fish = scenario.targetBelief;

    const displayFish = {'red': ['', 'none'],
                         'deepskyblue': ['none', '']};

    

    const selectNoLink = () => {
        setNoLink('1.0');
        setLRLink('.2');
        setRLLink('.2');
        setBothLink('.2');
        setSelectedStructure('independent')
        setButtonDisplay('');

    };

    const selectLRLink = () => {
        setNoLink('0.2');
        setLRLink('1.0');
        setRLLink('.2');
        setBothLink('.2');
        setSelectedStructure('lr')
        setButtonDisplay('');
    };

    const selectRLLink = () => {
        setNoLink('0.2');
        setLRLink('.2');
        setRLLink('1.0');
        setBothLink('.2');
        setSelectedStructure('rl')
        setButtonDisplay('');
    };

    const selectBothLink = () => {
        setNoLink('0.2');
        setLRLink('.2');
        setRLLink('.2');
        setBothLink('1.0');
        setSelectedStructure('both')
        if (scenario.condition === "bothExcite") {
            setSelectedStructure('bothExcite')
        };
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

            <Agent width={'200px'} top={'-10%'} left={'70%'} agent_id="legend" >YOUR FISH:</Agent> 
            <Agent width={'100px'} top={'-8%'} left={'88%'} agent_id="Fish" display={displayFish[fish][0]}>
            <img position={'absolute'} left={'0%'} top={'0%'} height={'75px'} src={redFishImage} alt="fish"/>
            </Agent>
            <Agent width={'100px'} top={'-8%'} left={'88%'} agent_id="Fish" display={displayFish[fish][1]}>
            <img position={'absolute'} top={'0%'} left={'0%'} height={'75px'} src={blueFishImage} alt="fish"/>
            </Agent>


            <Agent width={'40rem'} left={'3%'} agent_id="instr_frame" >Did {scenario.neighbour1Name.name} and {scenario.neighbour2Name.name} influence each other? <br /> (click on statement)</Agent> 
            
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
            <Agent onClick={selectLRLink} opacity={LRLink} agent_id="ConnectionTail" left={'22.5%'} top={scenario.structureOrder[1][0]} width={'14rem'}>{scenario.neighbour1Name.name} influenced {scenario.neighbour2Name.name}</Agent>
            <Agent onClick={selectRLLink}  opacity={RLLink}  agent_id="ConnectionTail" left={'22.5%'} top={scenario.structureOrder[2][0]} width={'14rem'}>{scenario.neighbour2Name.name} influenced {scenario.neighbour1Name.name}</Agent>
            <Agent onClick={selectBothLink} opacity={BothLink} agent_id="ConnectionTail" left={'22.5%'} top={scenario.structureOrder[3][0]} width={'14rem'}>Both influenced each other</Agent>

            
            <Agent agent_id="ConnectionR" left={'43%'} top={scenario.structureOrder[1][1]}> </Agent>
            <Agent agent_id="ConnectionR" left={'43%'} top={scenario.structureOrder[3][1]}> </Agent>
            <Agent agent_id="ConnectionL" left={'19%'} top={scenario.structureOrder[2][1]}> </Agent>
            <Agent agent_id="ConnectionL" left={'19%'} top={scenario.structureOrder[3][1]}> </Agent>
            

            
        

            {/* Scores */}
            {/* score history */}
            <Scores score_id="instr_frame" >SIGNAL SUMMARY</Scores> 
            <Scores score_id="B_name" >{scenario.neighbour1Name.name}</Scores>
            <Scores score_id="C_name" >{scenario.neighbour2Name.name}</Scores>

           
            
              {/* B Scores */}
              <Scores background={scenario.neighbourBeliefs.a[0]} opacity={scenario.neighbourBeliefs.ac[0]/3} id="B1" score_id="B1"  top={'15%'} >{scenario.neighbourBeliefs.ac[0].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'15%'} >{scenario.neighbourBeliefs.ac[0].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[1]} opacity={scenario.neighbourBeliefs.ac[1]/3} id="B2" score_id="B1"   top={'22%'} >{scenario.neighbourBeliefs.ac[1].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'22%'} >{scenario.neighbourBeliefs.ac[1].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[2]} opacity={scenario.neighbourBeliefs.ac[2]/3} id="B3" score_id="B1"  top={'29%'} >{scenario.neighbourBeliefs.ac[2].toString()}</Scores>  
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'29%'} >{scenario.neighbourBeliefs.ac[2].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[3]} opacity={scenario.neighbourBeliefs.ac[3]/3} id="B4" score_id="B1"  top={'36%'} >{scenario.neighbourBeliefs.ac[3].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'36%'} >{scenario.neighbourBeliefs.ac[3].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[4]} opacity={scenario.neighbourBeliefs.ac[4]/3} id="B5" score_id="B1"  top={'44%'} >{scenario.neighbourBeliefs.ac[4].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'44%'} >{scenario.neighbourBeliefs.ac[4].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[5]} opacity={scenario.neighbourBeliefs.ac[5]/3} id="B6" score_id="B1"  top={'51%'} >{scenario.neighbourBeliefs.ac[5].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'51%'} >{scenario.neighbourBeliefs.ac[5].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[6]} opacity={scenario.neighbourBeliefs.ac[6]/3} id="B7" score_id="B1"  top={'58%'} >{scenario.neighbourBeliefs.ac[6].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'58%'} >{scenario.neighbourBeliefs.ac[6].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[7]} opacity={scenario.neighbourBeliefs.ac[7]/3} id="B8" score_id="B1"  top={'65%'} >{scenario.neighbourBeliefs.ac[7].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'65%'} >{scenario.neighbourBeliefs.ac[7].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[8]} opacity={scenario.neighbourBeliefs.ac[8]/3} id="B9" score_id="B1" top={'72%'} >{scenario.neighbourBeliefs.ac[8].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'72%'} >{scenario.neighbourBeliefs.ac[8].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.a[9]} opacity={scenario.neighbourBeliefs.ac[9]/3} id="B10" score_id="B1" top={'79%'} >{scenario.neighbourBeliefs.ac[9].toString()}</Scores> 
            <Scores opacity={'1'} id="B1B" score_id="B1B"  top={'79%'} >{scenario.neighbourBeliefs.ac[9].toString()}</Scores> 
    

            {/* C scores  */}
            <Scores background={scenario.neighbourBeliefs.b[0]} opacity={scenario.neighbourBeliefs.bc[0]/3} id="C1" score_id="C1" top={'15%'} >{scenario.neighbourBeliefs.bc[0].toString()}</Scores>  
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'15%'} >{scenario.neighbourBeliefs.bc[0].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[1]} opacity={scenario.neighbourBeliefs.bc[1]/3} id="C2" score_id="C1"  top={'22%'}>{scenario.neighbourBeliefs.bc[1].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'22%'} >{scenario.neighbourBeliefs.bc[1].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[2]} opacity={scenario.neighbourBeliefs.bc[2]/3} id="C3" score_id="C1" top={'29%'} >{scenario.neighbourBeliefs.bc[2].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'29%'} >{scenario.neighbourBeliefs.bc[2].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[3]} opacity={scenario.neighbourBeliefs.bc[3]/3} id="C4" score_id="C1"  top={'36%'} >{scenario.neighbourBeliefs.bc[3].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'36%'} >{scenario.neighbourBeliefs.bc[3].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[4]} opacity={scenario.neighbourBeliefs.bc[4]/3} id="C5" score_id="C1"  top={'44%'} >{scenario.neighbourBeliefs.bc[4].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'44%'} >{scenario.neighbourBeliefs.bc[4].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[5]} opacity={scenario.neighbourBeliefs.bc[5]/3} id="C6" score_id="C1"  top={'51%'} >{scenario.neighbourBeliefs.bc[5].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'51%'} >{scenario.neighbourBeliefs.bc[5].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[6]} opacity={scenario.neighbourBeliefs.bc[6]/3} id="C7" score_id="C1"  top={'58%'} >{scenario.neighbourBeliefs.bc[6].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'58%'} >{scenario.neighbourBeliefs.bc[6].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[7]} opacity={scenario.neighbourBeliefs.bc[7]/3} id="C8" score_id="C1"  top={'65%'} >{scenario.neighbourBeliefs.bc[7].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'65%'} >{scenario.neighbourBeliefs.bc[7].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[8]} opacity={scenario.neighbourBeliefs.bc[8]/3} id="C9" score_id="C1"  top={'72%'} >{scenario.neighbourBeliefs.bc[8].toString()}</Scores> 
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'72%'} >{scenario.neighbourBeliefs.bc[8].toString()}</Scores> 
            <Scores background={scenario.neighbourBeliefs.b[9]} opacity={scenario.neighbourBeliefs.bc[9]/3} id="C10" score_id="C1" top={'79%'} >{scenario.neighbourBeliefs.bc[9].toString()}</Scores>   
            <Scores opacity={'1'} id="C1B" score_id="C1B"  top={'79%'} >{scenario.neighbourBeliefs.bc[9].toString()}</Scores> 
    
    
          

            <Action action_id="border_frame"></Action>

            <Button disabled={buttonDisplay} position={'absolute'} left={'40%'} top={'105%'} clicked={onNextHandler}>Next</Button>

            {props.children}

        </div>
        
    );
};


export default StructureFrame; 


