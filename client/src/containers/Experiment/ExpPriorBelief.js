import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Experiment/ExpPriorBelief.module.scss';
import { storePrior } from '../../store/actions/participantData';

const w = window;

// var alpha_1 = 20;
// var beta_1 = 40;

// var mean_1 = w.jStat.beta.mean(alpha_1, beta_1);
// var variance_1 = w.jStat.beta.variance(alpha_1, beta_1);

// var con_slid_val_1 = w.inverse_log_slider(variance_1);
// var con_slid_pos_1 = w.transform_con_slider_val(con_slid_val_1);

// var x_1 = w.create_arrays(0.01, .99, 1000, alpha_1, beta_1)[0];
// var y_1 = w.create_arrays(0.01, .99, 1000, alpha_1, beta_1)[1];



const ExpPriorBelief = props => {
    const [meanValue, setMeanValue] = useState(50);
    const [varValue, setVarValue] = useState(1);
    const conditionNumber = useSelector(state => state.conditionData.conditionNumber);
    const dispatch = useDispatch();
    const actorName = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber].name.name);
    useEffect(() => {
        // w.create_plot(x_1, y_1, mean_1.toFixed(2), 'ins_alice_plot', 'Unethical', 'Ethical', 350, "Alice", (Math.round(con_slid_pos_1)).toString(), '1');
        w.plot_distributions('beliefSlider', 'varSlider', 50, w.transform_con_slider_pos(1), 'ins_full_plot', 'Unethical', 'Ethical', "");
        // w.generate_network_single_neighbour('network_graph2', 125, 75, ntwData.nodes[1], ntwData.vs[0], ntwData.legs[2], ntwData.legs[3], ntwData.arms[3], ntwData.arms[4], ntwData.bodies[1], ntwData.lines[1], ntwData.arrows[1], 1, 'test', 'Alice');
    }, [])

    const beliefSliderHandler = e => {
        const belief = Math.round(e.target.value);
        setMeanValue(belief);
    };

    const varSliderHandler = e => {
        const variance = Math.round(e.target.value);
        setVarValue(variance);
    };

    const onNextHandler = () => {
        dispatch(storePrior({mean: meanValue, var: varValue, conditionNumber: conditionNumber}));
        props.goToExperimentPhase();
    };

    return (
        <div className={Classes.ExpPriorBelief}>
            <h1>Please provide your initial belief</h1>
            <hr />

            <p className={Classes.SmallDescription}>Based on what you just read, what is your opinion about {actorName}'s behaviour?</p>

            <div align="center" className={Classes.MainPlot} id="ins_full_plot" >
                <p align="center"><b>Belief slider:</b></p>
                <input className={Classes.Slider} type="range" min="5" max="95" value={meanValue} id="beliefSlider" step={0.90909090909} width="20%" onChange={beliefSliderHandler} />
                <output className={Classes.Output} id="beliefOutput">{meanValue}</output>

                <p align="center"><b>Certainty slider:</b></p>
                <input className={Classes.Slider} type="range" min="1" max="99" value={varValue} id="varSlider" step={1} width="20%" onChange={varSliderHandler} />
                <output className={Classes.Output} id="varOutput">{varValue}</output>
            </div>
            <Button clicked={onNextHandler}>See friends' belief</Button>
        </div>
    );
};

export default ExpPriorBelief;