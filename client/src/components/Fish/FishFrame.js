import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Agent from '../Agent/Agent';
import blueFishImage from '../../static/images/blue_fish_cooked.png';
import redFishImage from '../../static/images/red_fish_cooked.png';
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
            <Agent width={'500px'} agent_id="Fish" display={displayFish[fish][0]}>
            <p>On this space station, cooking revealed that the fish is <b>RED</b>!</p>
            <img position={'absolute'} left={'80%'} top={'30%'} height={'300px'} src={redFishImage} alt="fish"/>
            </Agent><br></br><br></br>
            <Agent width={'500px'} agent_id="Fish" display={displayFish[fish][1]}>
            <p>On this space station, cooking revealed that the fish is <b>BLUE</b>!</p>
            <img position={'absolute'} left={'80%'} top={'30%'} height={'300px'} src={blueFishImage} alt="fish"/>
        </Agent>
        
        <Button position={'absolute'} left={'40%'} top={'105%'} clicked={props.goToGame}>Next</Button>
   </div>        
    );
};

export default FishFrame; 


