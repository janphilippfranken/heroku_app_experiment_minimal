import React, { useEffect } from 'react';

import ClassesForCondition from '../../SASS/components/Experiment/Condition.module.scss';
import ClassesForHint from '../../SASS/components/Experiment/ConditionHint.module.scss';

const w = window;

const Condition = props => {
    const { neighbour1Name, neighbour2Name, type } = props;
    let Classes = ClassesForCondition;
    if (props.isAHint) {
         Classes = ClassesForHint;
    }
    useEffect(() => {
        w.draw_network_plotly('network_1', neighbour1Name.name, neighbour2Name.name, type);
    }, [neighbour1Name, neighbour2Name, type]);

    useEffect(() => {
        // w.document.getElementById('network_1').transform
    }, []);
    let condition;
    if (props.type === 'independent') {
        condition = (
            <div className={Classes.Condition}>
                <ol className={Classes.OrderedList}>
                    <li>
                        {props.neighbour1Name.name} and {props.neighbour2Name.name} knew about {props.actorName.name}'s motives from <b>different sources.</b>
                    </li>
                    <li>
                        They formed their beliefs <b>independently</b> (they didn't speak to each other prior sharing their beliefs with you.)
                </li>
                </ol>
                <hr />
                <div className={Classes.NetworkPlotlyContainer}>
                    <h5>Visual representation</h5>
                    <div className={Classes.NetworkPlotly} id='network_1' />
                </div>
            </div>
        );
    } else if (props.type === 'shared') {
        condition = (
            <div className={Classes.Condition}>
                <ol className={Classes.OrderedList}>
                    <li>
                        {props.neighbour1Name.name} and {props.neighbour2Name.name} knew about {props.actorName.name}'s motives from <b>the same source.</b>
                    </li>
                    <li>
                        They formed their beliefs <b>independently</b> (they didn't speak to each other prior sharing their beliefs with you.)
                    </li>
                </ol>
                <hr />
                <div className={Classes.NetworkPlotlyContainer}>
                    <h5>Visual representation</h5>
                    <div className={Classes.NetworkPlotly} id='network_1' />
                </div>
            </div>
        );
    } else if (props.type === 'sequential') {
        condition = (
            <div className={Classes.Condition}>
                <ol className={Classes.OrderedList}>
                    <li>
                        {props.neighbour1Name.name} and {props.neighbour2Name.name} knew about {props.actorName.name}'s motives from <b>different sources.</b>
                    </li>
                    <li>
                        They formed their beliefs <b>sequentially</b> (they spoke to each other prior sharing their beliefs with you.)
                    </li>
                </ol>
                <hr />
                <div className={Classes.NetworkPlotlyContainer}>
                    <h5>Visual representation</h5>
                    <div className={Classes.NetworkPlotly} id='network_1' />
                </div>
            </div>
        );
    }

    return (
        <div className={Classes.Container}>
            {!props.isAHint && <hr />}
            {props.isAHint ? <p><i>Recall that...</i></p> : <h3>Important background information</h3>}
            <hr />
            {condition}
            <hr />
        </div>
    );
};

export default Condition;