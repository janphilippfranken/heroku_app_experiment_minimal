import React, { useEffect } from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instructions/InsPosterior.module.scss';
import ntwData from '../../constants/draw-network/network_variables';
import sepImg from '../../static/images/seperation.png';

const w = window;

var alpha_1 = 20;
var alpha_2 = 10;
var beta_1 = 40;
var beta_2 = 10;

var mean_1 = w.jStat.beta.mean(alpha_1, beta_1);
var mean_2 = w.jStat.beta.mean(alpha_2, beta_2);
var variance_1 = w.jStat.beta.variance(alpha_1, beta_1);
var variance_2 = w.jStat.beta.variance(alpha_2, beta_2);

var con_slid_val_1 = w.inverse_log_slider(variance_1);
var con_slid_val_2 = w.inverse_log_slider(variance_2);
var con_slid_pos_1 = w.transform_con_slider_val(con_slid_val_1);
var con_slid_pos_2 = w.transform_con_slider_val(con_slid_val_2);

var x_1 = w.create_arrays(0.01, .99, 1000, alpha_1, beta_1)[0];
var x_2 = w.create_arrays(0.01, .99, 1000, alpha_2, beta_2)[0];
var y_1 = w.create_arrays(0.01, .99, 1000, alpha_1, beta_1)[1];
var y_2 = w.create_arrays(0.01, .99, 1000, alpha_2, beta_2)[1];



const InsPosterior = props => {
    useEffect(() => {
        w.create_plot(x_1, y_1, mean_1.toFixed(2), 'ins_alice_plot', 'Unethical', 'Ethical', 350, "Alice", (Math.round(con_slid_pos_1)).toString(), '1');
        w.create_plot(x_2, y_2, mean_2.toFixed(2), 'ins_bob_plot', 'Unethical', 'Ethical', 350, "Bob", (Math.round(con_slid_pos_2)).toString(), '1');
        w.generate_network_single_neighbour('network_graph_alice', 125, 75, ntwData.nodes[1], ntwData.vs[0], ntwData.legs[2], ntwData.legs[3], ntwData.arms[3], ntwData.arms[4], ntwData.bodies[1], ntwData.lines[1], ntwData.arrows[1], 1, 'test', 'Alice');
        w.generate_network_single_neighbour('network_graph_bob', 125, 75, ntwData.nodes[1], ntwData.vs[0], ntwData.legs[2], ntwData.legs[3], ntwData.arms[3], ntwData.arms[4], ntwData.bodies[1], ntwData.lines[1], ntwData.arrows[1], 1, 'test', 'Bob');
        
        w.plot_distributions('beliefSlider', 'varSlider', 66, w.transform_con_slider_pos(10), 'ins_full_plot', 'Unethical', 'Ethical', "");
    }, [])

    const beliefSliderHandler = () => {
        const belief = parseInt(document.getElementById('beliefSlider').value);
        document.getElementById('beliefOutput').value = belief;

    };

    const varSliderHandler = () => {
        const variance = parseInt(document.getElementById('varSlider').value);
        document.getElementById('varOutput').value = variance;
    };

    return (

        <div className={Classes.InsPosterior}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Belief revision</h1>
                <hr />
                <div className={Classes.NeighboursContainer}>

                    <div className={Classes.AliceContainerOuter}>
                        <div className={Classes.CanvasContainer}>
                            <canvas id="network_graph_alice" height="150" width="150"></canvas>
                        </div>
                        <div className={Classes.AliceContainer}>
                            <h4 align="center"><b>Alice thinks Avery's act is unethical</b></h4>
                            <div className={Classes.AlicePlot} id="ins_alice_plot" />
                        </div>
                    </div>
                    <img src={sepImg} alt="vertical line" className={Classes.SeperationImage} />
                    <div className={Classes.BobContainerOuter}>
                        <div className={Classes.BobContainer}>
                            <h4 align="center"><b>Bob is uncertain about his belief</b></h4>
                            <div className={Classes.AlicePlot} id="ins_bob_plot" />
                        </div>
                        <div className={Classes.CanvasContainer}>
                            <canvas id="network_graph_bob" height="150" width="150"></canvas>
                        </div>
                    </div>

                </div>

                <p className={Classes.SmallDescription}>Now that you have heard from Alice and Bob --<b>who know that Avery decided to lower employees'
                wages and to to keep the new, lower wage as the standard wage,
                which in turn will save the company more money in the long term</b>-- it is time to revise your
                initial assessment about Avery. Use the sliders below to provide your own belief as well as
                    how certain you are about it.</p>

                <div align="center" className={Classes.MainPlot} id="ins_full_plot" >
                    <p align="center"><b>Belief slider:</b></p>
                    <input className={Classes.Slider} type="range" min="5" max="95" defaultValue id="beliefSlider" step={0.90909090909} width="20%" onChange={beliefSliderHandler} />
                    <output className={Classes.Output} id="beliefOutput">66</output>

                    <p align="center"><b>Certainty slider:</b></p>
                    <input className={Classes.Slider} type="range" min="1" max="99" defaultValue id="varSlider" step={1} width="20%" onChange={varSliderHandler} />
                    <output className={Classes.Output} id="varOutput">10</output>
                </div>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsPosterior;