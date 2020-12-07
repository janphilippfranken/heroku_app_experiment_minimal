import React from 'react';
import Button from '../../components/Button/Button';
import GameFrame from '../../components/GameFrame/GameFrame';
import ScoreFrame from '../../components/ScoreFrame/ScoreFrame';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import classes from '../../SASS/containers/GameInterface.module.scss';
import { setTimer } from '../../store/actions/timer';
import { changePhase, PHASES } from '../../store/actions/gamePhase';

// Game Interface contains the interactive interface during which 
// participants can observe states of others or tell them something
const GameInterface = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTimer(true, 1, 5));
    }, [dispatch]);

    const goToDebriefHandler = () => {
        dispatch(changePhase(PHASES.ethics));
    };
    return (
        <div className={classes.GameInterface}>
        <div className={classes.GameForm}>
            <h2>Game</h2>
            <hr />

            {/* <div className={classes.ParagraphContainer}> */}
               
            <div className={classes.GameContainer}>
               
                <GameFrame/>
                <ScoreFrame/>

            </div>
            
               
            {/* </div> */}
            <Button clicked={goToDebriefHandler}>Continue</Button>
            
        </div>
    </div>
    );
};
export default GameInterface; 