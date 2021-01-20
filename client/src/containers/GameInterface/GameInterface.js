import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import FishFrame from '../../components/Fish/FishFrame';
import GameFrame from '../../components/GameFrame/GameFrame';
import StructureFrame from '../../components/StructureFrame/StructureFrame';
import PlanetFrame from '../../components/PlanetFrame/PlanetFrame';
import NextPlanetFrame from '../../components/NextPlanet/NextPlanetFrame';
import { incrementCondition } from '../../store/actions/conditionData';
import { changePhase, PHASES } from '../../store/actions/gamePhase';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import classes from '../../SASS/containers/GameInterface.module.scss';
import { setTimer } from '../../store/actions/timer';


// Game Interface contains the interactive interface during which 
// participants can observe states of others or tell them something
const GAME_PHASES = {
    observeFIsh: 'OBSERVE_FISH',
    observeBeliefs: 'OBSERVE_BELIEFS',
    selectStructure: 'SELECT_STRUCTURE',
    selectPlanet: 'SELECT_PLANET',
    nextPlanet: 'NEXT_PLANET'
};

const GameInterface = props => {

    const dispatch = useDispatch();
    const conditionNumber = useSelector(state => state.conditionData.conditionNumber);
    const scenario = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber]);
    

    useEffect(() => {
        dispatch(setTimer(true, 1, 5));
    }, [dispatch]);

    const [gamePhase, setGamePhase] = useState(GAME_PHASES.observeFish);
    const [fishDisplay, setFishDisplay] = useState('');
    const [beliefDisplay, setBeliefDisplay] = useState('none');
    const [structureDisplay, setStructureDisplay] = useState('none');
    const [planetDisplay, setPlanetDisplay] = useState('none');
    const [nextPlanetDisplay, setNextPlanetDisplay] = useState('none');


    const goToGameHandler = gamePhase => {
        if (gamePhase === GAME_PHASES.observeFish) {
            setFishDisplay('');
            setBeliefDisplay('none');
            setStructureDisplay('none');
            setNextPlanetDisplay('none');
            setGamePhase(GAME_PHASES.selectStructure)
        } else if (gamePhase === GAME_PHASES.observeBeliefs) {
            setFishDisplay('none');
            setBeliefDisplay('');
            setStructureDisplay('none');
            setNextPlanetDisplay('none');
            setGamePhase(GAME_PHASES.selectStructure)
        } else if (gamePhase === GAME_PHASES.selectStructure) {
            setBeliefDisplay('none');
            setStructureDisplay('');;
            setGamePhase(GAME_PHASES.selectPlanet)
        } else if (gamePhase === GAME_PHASES.selectPlanet) {
            setBeliefDisplay('none');
            setStructureDisplay('none');
            setPlanetDisplay('');
            setGamePhase(GAME_PHASES.nextPlanet)
        }
        else if (gamePhase === GAME_PHASES.nextPlanet) {

            if (conditionNumber === 4) {
                return dispatch(changePhase(PHASES.debrief));
            }

            setPlanetDisplay('none');
            setNextPlanetDisplay('')
            setGamePhase(GAME_PHASES.observeFish)
            dispatch(incrementCondition());
        }
    };

    
    return (
        <div className={classes.GameInterface}>
        <div className={classes.GameForm}>
            <h2>{scenario.title}</h2>
            <hr />

            {/* <div className={classes.ParagraphContainer}> */}
               
            <div className={classes.GameContainer}>
                <FishFrame display={fishDisplay} goToGame={goToGameHandler.bind(this, GAME_PHASES.observeBeliefs)} > </FishFrame>
                <GameFrame display={beliefDisplay} goToGame={goToGameHandler.bind(this, GAME_PHASES.selectStructure)} ></GameFrame>
                <StructureFrame display={structureDisplay} goToGame={goToGameHandler.bind(this, GAME_PHASES.selectPlanet)}></StructureFrame>
                <PlanetFrame display={planetDisplay} goToGame={goToGameHandler.bind(this, GAME_PHASES.nextPlanet)}></PlanetFrame>
                <NextPlanetFrame display={nextPlanetDisplay} goToGame={goToGameHandler.bind(this, gamePhase)}></NextPlanetFrame>
            </div>                   
        </div>
    </div>
    );
};
export default GameInterface; 