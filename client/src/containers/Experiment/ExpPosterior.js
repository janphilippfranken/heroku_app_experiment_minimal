import React, { useState, useEffect } from 'react';

import { storePosterior } from '../../store/actions/participantData';

import Classes from '../../SASS/containers/Experiment/ExpPosterior.module.scss';
import Button from '../../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import makeData from '../../utils/AlphaBetaToArrayData';
import sepImg from '../../static/images/seperation.png';
import Condition from '../../components/Experiment/Condition';

const w = window;

const ExpPosterior = props => {
    const dispatch = useDispatch();
    const conditionNum = useSelector(state => state.conditionData.conditionNumber);
    const condition = useSelector(state => state.conditionData.conditions[conditionNum]);
    const neighbour1Beliefs = useSelector(state => state.conditionData.neighbourBeliefsOrder[conditionNum][0]);
    const neighbour2Beliefs = useSelector(state => state.conditionData.neighbourBeliefsOrder[conditionNum][1]);
    const neighbour1Name = useSelector(state => state.conditionData.conditionData[conditionNum].neighbour1Name);
    const neighbour2Name = useSelector(state => state.conditionData.conditionData[conditionNum].neighbour2Name);
    const actorName = useSelector(state => state.conditionData.conditionData[conditionNum].name);
    const actorMotive = useSelector(state => state.conditionData.conditionData[conditionNum].motive);
    const priorData = useSelector(state => state.participantData[conditionNum].prior);

    useEffect(() => {
        // NEIGHBOUR 1
        const neigh1Data = makeData(neighbour1Beliefs.a, neighbour1Beliefs.b);
        const neigh2Data = makeData(neighbour2Beliefs.a, neighbour2Beliefs.b);
        const yourData = makeData(priorData.a, priorData.b);

        w.create_plot(neigh1Data.x, neigh1Data.y, neigh1Data.mean.toFixed(2), 'ins_neighbour1_plot', 'Unethical', 'Ethical', 350, neighbour1Name.name, (Math.round(neigh1Data.var)).toString(), '1');
        w.create_plot(yourData.x, yourData.y, yourData.mean.toFixed(2), 'ins_your_plot', 'Unethical', 'Ethical', 350, "Your", (Math.round(yourData.var)).toString(), '1');
        w.create_plot(neigh2Data.x, neigh2Data.y, neigh2Data.mean.toFixed(2), 'ins_neighbour2_plot', 'Unethical', 'Ethical', 350, neighbour2Name.name, (Math.round(neigh2Data.var)).toString(), '1');

        w.plot_distributions('beliefSlider', 'varSlider', beliefValue, varValue, 'ins_full_plot', 'Unethical', 'Ethical', "");

    }, []);


    const [beliefValue, setBeliefValue] = useState(priorData.meanRaw);
    const [varValue, setVarValue] = useState(priorData.varRaw);

    const beliefSliderHandler = e => {
        setBeliefValue(Math.round(e.target.value));
    };

    const varSliderHandler = e => {
        setVarValue(Math.round(e.target.value));
    };

    const submitDataHandler = () => {
        dispatch(storePosterior({mean: beliefValue, var: varValue, conditionNumber: conditionNum}));
        props.goToExperimentPhase();
    };

    return (
        <div className={Classes.ExpPosterior}>
            <div className={Classes.InnerContainer}>
                <h1>Neighbours' beliefs</h1>
                <hr />
                <div className={Classes.NeighboursContainer}>

                    <div className={Classes.Neighbour1ContainerOuter}>
                        <div className={Classes.Neighbour1Container}>
                            <div className={Classes.Neighbour1Plot} id="ins_neighbour1_plot" />
                        </div>
                    </div>
                    <img src={sepImg} alt="vertical line" className={Classes.SeperationImage1} />
                    <div className={Classes.YourContainerOuter}>
                        <div className={Classes.YourContainer}>
                            <div className={Classes.YourPlot} id="ins_your_plot" />
                        </div>
                    </div>
                    <img src={sepImg} alt="vertical line" className={Classes.SeperationImage2} />
                    <div className={Classes.Neighbour2ContainerOuter}>
                        <div className={Classes.Neighbour2Container}>
                            <div className={Classes.AlicePlot} id="ins_neighbour2_plot" />
                        </div>

                    </div>
                </div>
                <br />
                <p className={Classes.SmallDescription}>Now that you have heard from {neighbour1Name.name} and {neighbour2Name.name} --<b>who
                know that {actorName.name} decided to {actorMotive}</b>-- it is time to revise your
                initial assessment about {actorName.name}. Use the sliders below to provide your own belief as well as
                how certain you are about it.</p>
                <br />
                <Condition
                    type={condition}
                    neighbour1Name={neighbour1Name}
                    neighbour2Name={neighbour2Name}
                    actorName={actorName}
                    isAHint={true}
                />
                <hr />

                <div align="center" className={Classes.MainPlot} id="ins_full_plot" >
                    <p align="center"><b>Belief slider:</b></p>
                    <input className={Classes.Slider} type="range" min="5" max="95" value={beliefValue} id="beliefSlider" step={0.90909090909} width="20%" onChange={beliefSliderHandler} />
                    <output className={Classes.Output} id="beliefOutput">{beliefValue}</output>

                    <p align="center"><b>Certainty slider:</b></p>
                    <input className={Classes.Slider} type="range" min="1" max="99" value={varValue} id="varSlider" step={1} width="20%" onChange={varSliderHandler} />
                    <output className={Classes.Output} id="varOutput">{varValue}</output>
                </div>
                <Button clicked={submitDataHandler}>Next</Button>
            </div>
        </div>
    );
};

export default ExpPosterior;