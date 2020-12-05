import React, { useState } from 'react';
import InsOverview from './InsOverview';
import InsPossibleScenario from './InsPossibleScenario';
import InsMeanSlider from './InsMeanSlider';
import InsVarSlider from './InsVarSlider';
import InsNeighbourV1 from './InsNeighbourV1';
import InsPosterior from './InsPosterior';
import InsSummary from './InsSummary';
import InsQuiz from './InsQuiz';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTimer } from '../../store/actions/timer';

const INS_PHASES = {
    overview: 'INSTRUCTIONS_OVERVIEW',
    possibleScenario: 'POSSIBLE_SCENARIO',
    meanSlider: 'MEAN_SLIDER',
    varSlider: 'VAR_SLIDER',
    neighbourV1: 'NEIGHBOUR_V1',
    posterior: 'POSTERIOR',
    summary: 'SUMMARY',
    comprehensionQuiz: 'QUIZ'
};

const Instructions = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTimer(true, 1, 5));
    }, [dispatch]);

    const [instructionsPhase, setInstructionsPhase] = useState(INS_PHASES.overview);

    const goToInstructionHandler = instructionPage => {
        setInstructionsPhase(instructionPage);
    };

    let currentInstruction;
    if (instructionsPhase === INS_PHASES.overview) {
        currentInstruction = <InsOverview goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.possibleScenario)}/>;
    } else if (instructionsPhase === INS_PHASES.possibleScenario) {
        currentInstruction = <InsPossibleScenario goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.meanSlider)} />;
    } else if (instructionsPhase === INS_PHASES.meanSlider) {
        currentInstruction = <InsMeanSlider goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.varSlider)} />;
    } else if (instructionsPhase === INS_PHASES.varSlider) {
        currentInstruction = <InsVarSlider goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.neighbourV1)} />;
    } else if (instructionsPhase === INS_PHASES.neighbourV1) {
        currentInstruction = <InsNeighbourV1 goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.posterior)} />;
    } else if (instructionsPhase === INS_PHASES.posterior) {
        currentInstruction = <InsPosterior goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.summary)} />;
    } else if (instructionsPhase === INS_PHASES.summary) {
        currentInstruction = <InsSummary goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.comprehensionQuiz)} />;
    } else if (instructionsPhase === INS_PHASES.comprehensionQuiz) {
        currentInstruction = <InsQuiz goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.overview)} />;
    }

    return (
        currentInstruction
    );
};

export default Instructions;