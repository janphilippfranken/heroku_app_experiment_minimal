import React from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Experiment/ExpOverview.module.scss';

const ExpOverview = props => {

    return (
        <div className={Classes.ExpOverview}>
            <div className={Classes.InnerContainer}>
                <h1>You are ready to go!</h1>
                <hr />
                <ol style={{paddingLeft: 15}}>
                    <li>You will now read the fictional scenario involving information about an individual.</li>
                    <li>Then, you'll give your initial judgement about the main character of the scenario.</li>
                    <li>Finally, you'll be exposed to the views of other people in your city, and you'll be asked to state your beliefs again.</li>
                </ol>
                <hr />
                <Button clicked={props.goToExperimentPhase}>Next</Button>
            </div>
        </div>
    );
};

export default ExpOverview;