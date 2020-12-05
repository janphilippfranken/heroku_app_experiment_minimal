import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExpOverview from './ExpOverview';
import ExpScenario from './ExpScenario';
import ExpNeighbourBeliefs from './ExpNeighbourBeliefs';
import ExpFinishRound from './ExpFinishRound';

import { setTimer } from '../../store/actions/timer';
import ExpPosterior from './ExpPosterior';

const EXP_PHASES = {
    overview: 'EXP_OVERVIEW',
    scenario: 'SCENARIO', // this also includes prior beliefs
    neighbourBeliefs: 'NEIGHBOUR_BELIEFS',
    posterior: 'POSTERIOR',
    finishRound: 'FINISH_ROUND'

};

const Experiment = props => {
    const dispatch = useDispatch();
    const conditionNumber = useSelector(state => state.conditionData.conditionNumber);

    useEffect(() => {
        dispatch(setTimer(true, 1, 5));
    }, [dispatch]);

    const [experimentPhase, setExperimentPhase] = useState(EXP_PHASES.overview);

    const goToExperimentPhaseHandler = expPhase => {
        setExperimentPhase(expPhase);
    };

    let currentExperimentPhase;
    if (experimentPhase === EXP_PHASES.overview) {
        currentExperimentPhase = <ExpOverview goToExperimentPhase={goToExperimentPhaseHandler.bind(this, EXP_PHASES.scenario)}/>;
    } else if (experimentPhase === EXP_PHASES.scenario) {
        currentExperimentPhase = <ExpScenario goToExperimentPhase={goToExperimentPhaseHandler.bind(this, EXP_PHASES.neighbourBeliefs)}/>;
    } else if (experimentPhase === EXP_PHASES.neighbourBeliefs) {
        currentExperimentPhase = <ExpNeighbourBeliefs goToExperimentPhase={goToExperimentPhaseHandler.bind(this, EXP_PHASES.posterior)}/>;
    } else if (experimentPhase === EXP_PHASES.posterior) {
        currentExperimentPhase = <ExpPosterior goToExperimentPhase={goToExperimentPhaseHandler.bind(this, EXP_PHASES.finishRound)}/>;
    } else if (experimentPhase === EXP_PHASES.finishRound) {
        currentExperimentPhase = <ExpFinishRound goToExperimentPhase={goToExperimentPhaseHandler.bind(this, EXP_PHASES.scenario)}/>;
    }
    
    if (conditionNumber > 2) {
        currentExperimentPhase = 'Debrief';
    }

    return (
        currentExperimentPhase
    );
};

export default Experiment;