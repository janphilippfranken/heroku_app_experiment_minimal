import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Experiment/ExpScenario.module.scss';
import Scenario from '../../components/Experiment/Scenario';
import ExpPriorBelief from '../../containers/Experiment/ExpPriorBelief';


const ExpScenario = props => {
    const dispatch = useDispatch();
    const [showPlot, setShowPlot] = useState(false);

    const scenario = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber]);

    const [sec, setSec] = useState(10);
    useEffect(() => {
        if (sec === 0) return
        const countDown = setTimeout(() => {
            setSec(oldState => oldState - 1);
        }, 1000)
        return () => clearTimeout(countDown);
    }, [sec]);

    const displayPlotHandler = () => {
        setShowPlot(true);
    };
    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, [showPlot])
    let showPlotButton = sec !== 0 ? <Button disabled>Please wait: {sec}</Button> : <Button clicked={displayPlotHandler}>Give answer</Button>;
    if (showPlot) {
        showPlotButton = null;
    };
    return (
        <div className={Classes.ExpScenario}>
            <div className={Classes.InnerContainer}>
                <Scenario
                    title={scenario.title}
                    content={scenario.scenario}
                    question={scenario.question}
                    image={scenario.image}
                    imageAlt={scenario.title}
                />
                {showPlotButton}
                {showPlot && <ExpPriorBelief goToExperimentPhase={props.goToExperimentPhase} />}
            </div>
        </div>
    );
};

export default ExpScenario;