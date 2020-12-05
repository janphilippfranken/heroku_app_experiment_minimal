import React, { useEffect } from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instructions/InsNeighbourV1.module.scss';
import ntwData from '../../constants/draw-network/network_variables';

const w = window;

const InsNeighbourV1 = props => {
    useEffect(() => {
        w.generate_network('network_graph2', 425, 75, ntwData.nodes[0], ntwData.vs[0], ntwData.legs[0], ntwData.legs[1], ntwData.arms[0], ntwData.arms[1], ntwData.bodies[0], ntwData.lines[0], ntwData.arrows[0], -1, 'test', 'Alice');
        w.generate_network('network_graph2', 80, 75, ntwData.nodes[1], ntwData.vs[0], ntwData.legs[2], ntwData.legs[3], ntwData.arms[3], ntwData.arms[4], ntwData.bodies[1], ntwData.lines[1], ntwData.arrows[1], 1, 'test', 'Bob');
    }, [])
    return (

        <div className={Classes.InsNeighbourV1}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Belief sharing</h1>
                <p><b>Alice</b> and <b>Bob</b> are two friends of yours who have also formed an opinion about
                Avery (the main character in the story you just read), but they also know Avery's motives behind their decision.
                Specifically, they both know that Avery decided to lower employees' wages and to to keep the new, lower wage as the standard wage,
                    which in turn will save the company more money in the long term.</p>

                <br />
                <p>
                    <b><i>Note that, although in the experiment you will always be exposed to beliefs coming from two other people,
                    the background story of how these other people came to form their beliefs differs from scenario to scenario.</i></b>
                </p>
                <br />
                <p>In this example, the background story is as follows:</p>
                <br />
                <ol>
                    <li>Alice knew about Avery's motives and formed her opinion about Avery on her own.</li>
                    <li>Bob also knew about Avery's motives and formed his opinion about Avery on his own.</li>
                </ol>
                <br />
                <p>In other words, <b>no prior communication</b> between Alice and Bob took place before sharing their beliefs with you.</p>
                <br />

                <div className={Classes.CanvasContainer}>
                    <canvas id="network_graph2" height="410" width="500"></canvas>
                </div>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsNeighbourV1;