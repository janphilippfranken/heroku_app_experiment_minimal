import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import GameFrame from '../../components/GameFrame/GameFrame';
import StructureFrame from '../../components/StructureFrame/StructureFrame';
import PlanetFrame from '../../components/PlanetFrame/PlanetFrame';
import NextPlanetFrame from '../../components/NextPlanet/NextPlanetFrame';


import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import classes from '../../SASS/containers/GameInterface.module.scss';
import { setTimer } from '../../store/actions/timer';


// Game Interface contains the interactive interface during which 
// participants can observe states of others or tell them something
const GAME_PHASES = {
    observeBeliefs: 'OBSERVE_BELIEFS',
    selectStructure: 'SELECT_STRUCTURE',
    selectPlanet: 'SELECT_PLANET',
    nextPlanet: 'NEXT_PLANET'
};

const GameInterface = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTimer(true, 1, 5));
    }, [dispatch]);

    const [gamePhase, setGamePhase] = useState(GAME_PHASES.selectStructure);
    const [beliefDisplay, setBeliefDisplay] = useState('');
    const [structureDisplay, setStructureDisplay] = useState('none');
    const [planetDisplay, setPlanetDisplay] = useState('none');
    const [nextPlanetDisplay, setNextPlanetDisplay] = useState('none');


    const goToGameHandler = gamePhase => {
        if (gamePhase === GAME_PHASES.observeBeliefs) {
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
            setPlanetDisplay('none');
            setNextPlanetDisplay('')
            setGamePhase(GAME_PHASES.observeBeliefs)
        }
    };

    
    return (
        <div className={classes.GameInterface}>
        <div className={classes.GameForm}>
            <h2>Your Journey</h2>
            <hr />

            {/* <div className={classes.ParagraphContainer}> */}
               
            <div className={classes.GameContainer}>
                <GameFrame display={beliefDisplay}></GameFrame>
                <StructureFrame display={structureDisplay}/>
                <PlanetFrame display={planetDisplay}/>
                <NextPlanetFrame display={nextPlanetDisplay}></NextPlanetFrame>
            </div>       

            
            <Button clicked={goToGameHandler.bind(this, gamePhase)}>Continue</Button>
            
        </div>
    </div>
    );
};
export default GameInterface; 