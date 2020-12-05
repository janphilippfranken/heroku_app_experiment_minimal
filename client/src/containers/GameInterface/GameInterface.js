import React from 'react';
import Button from '../../components/Button/Button';
import GameFrame from '../../components/GameFrame/GameFrame';
import ScoreFrame from '../../components/ScoreFrame/ScoreFrame';
import classes from '../../SASS/containers/GameInterface.module.scss';

// Game Interface contains the interactive interface during which 
// participants can observe states of others or tell them something
const GameInterface = props => {
    return (
        <div className={classes.GameInterface}>
        <div className={classes.GameForm}>
            <h2>Main Game</h2>
            <hr />
            {/* <div className={classes.ParagraphContainer}> */}
                <GameFrame/>
               
            {/* </div> */}
            <Button>Accept Hit</Button>
            
        </div>
    </div>
    );
};
export default GameInterface; 