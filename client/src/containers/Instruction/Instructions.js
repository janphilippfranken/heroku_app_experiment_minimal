import React, { useState } from 'react';
import InsOverview from './InsOverview';
import InsTask from './InsTask';
import InsTask2 from './InsTask2';
import InsSummary from './InsSummary';
import InsQuiz from './InsQuiz';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTimer } from '../../store/actions/timer';

const INS_PHASES = {
    overview: 'INSTRUCTIONS_OVERVIEW',
    task: 'INSTRUCTIONS_TASK',
    task2: 'INSTRUCTIONS_TASK_2',
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
        currentInstruction = <InsOverview goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.task)}/>;
    } else if (instructionsPhase === INS_PHASES.task) {
        currentInstruction = <InsTask goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.task2)} />;
    } else if (instructionsPhase === INS_PHASES.task2) {
        currentInstruction = <InsTask2 goToInstruction={goToInstructionHandler.bind(this, INS_PHASES.summary)} />;
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