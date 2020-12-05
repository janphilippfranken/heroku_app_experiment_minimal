import React from 'react';

import Classes from '../../SASS/components/Experiment/Scenario.module.scss';


const Scenario = props => {
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            <br />
            <p className={Classes.Text}><i>Scenario</i></p>
            <hr />
            <p>{props.content}</p>
            <hr />
            <br />
            <p className={Classes.Text}>{props.question}</p>
            <br />
            <div className={Classes.ImageContainer}>
                <img src={props.image} alt={props.imageAlt} />
            </div>
        </React.Fragment>
    );
};

export default Scenario;