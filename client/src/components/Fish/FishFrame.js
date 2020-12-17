import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Agent from '../Agent/Agent';
import blueFishImage from '../../static/images/blue_fish.png';
import redFishImage from '../../static/images/red_fish.png';
import Button from '../../components/Button/Button';
import Classes from './FishFrame.module.css';



const FishFrame = props => {
   
    const scenario = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber]);
    const fish = scenario.targetBelief;

    const displayFish = {'red': ['', 'none'],
                         'deepskyblue': ['none', '']};
    


    return (

        <div className={Classes.FishFrame}  style={{display: props.display}}>
             {props.children}
            <Agent width={'400px'} agent_id="Fish" display={displayFish[fish][0]}>
            <p>In this village, the fisherman gave you a <b>RED</b> fish!</p>
            <img position={'absolute'} left={'80%'} top={'50%'} height={'200px'} src={redFishImage} alt="fish"/>
            </Agent>
            <Agent width={'400px'} agent_id="Fish" display={displayFish[fish][1]}>
            <p>In this village, the fisherman gave you a <b>BLUE</b> fish!</p>
            <img position={'absolute'} left={'80%'} top={'50%'} height={'200px'} src={blueFishImage} alt="fish"/>
        </Agent>
        <Button position={'absolute'} left={'40%'} top={'105%'} clicked={props.goToGame}>Next</Button>
   </div>        
    );
};

export default FishFrame; 


