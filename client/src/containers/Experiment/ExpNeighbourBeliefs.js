import React from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Experiment/ExpNeighbourBeliefs.module.scss';
import { useSelector } from 'react-redux';
import Condition from '../../components/Experiment/Condition';

const ExpNeighbourBeliefs = props => {
    const neighbour1Name = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber].neighbour1Name);
    const neighbour2Name = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber].neighbour2Name);
    const actorName = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber].name);
    const motive = useSelector(state => state.conditionData.conditionData[state.conditionData.conditionNumber].motive);
    const condition = useSelector(state => state.conditionData.conditions[state.conditionData.conditionNumber]);

    return (

        <div className={Classes.ExpNeighbourBeliefs}>
            <div className={Classes.InnerContainer}>
                <h1>{neighbour1Name.name}'s and {neighbour2Name.name}'s beliefs</h1>
                <hr />
                <p>{neighbour1Name.name} and {neighbour2Name.name} are two friends of yours who have also formed an opinion about {actorName.name} (the
                main character in the story you just read), but they also know {actorName.name}'s motives behind {actorName.possessive} decision. Specifically
                they know that {actorName.name} decided to <b>{motive}</b> </p>
                <br />
                <Condition
                    type={condition}
                    neighbour1Name={neighbour1Name}
                    neighbour2Name={neighbour2Name}
                    actorName={actorName}
                />
                <Button clicked={props.goToExperimentPhase}>Next</Button>
            </div>
        </div>
    );
};

export default ExpNeighbourBeliefs;