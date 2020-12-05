import React from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Experiment/ExpFinishRound.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCondition } from '../../store/actions/conditionData';
import { changePhase, PHASES } from '../../store/actions/gamePhase';

const ExpFinishRound = props => {
    const conditionNumber = useSelector(state => state.conditionData.conditionNumber);
    const dispatch = useDispatch();
    const finishHandler = () => {
        if (conditionNumber === 2) {
            return dispatch(changePhase(PHASES.debrief));
        }
        dispatch(incrementCondition());
        props.goToExperimentPhase();
    };
    return (
        <div className={Classes.ExpFinishRound}>
            <div className={Classes.InnerContainer}>
                <h1>Great job!</h1>
                <h3>{conditionNumber < 2 ? `Let's now move on to the next round.` : 'You finished the game!'}</h3>
                <hr />
                <br />
                <Button clicked={finishHandler}>Next</Button>
            </div>
        </div>
    );
};

export default ExpFinishRound;