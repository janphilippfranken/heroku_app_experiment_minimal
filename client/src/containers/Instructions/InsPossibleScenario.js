import React from 'react';

import Button from '../../components/Button/Button';
import businessmanImg from '../../static/images/businessman-had-headache.jpg';
import Classes from '../../SASS/containers/Instructions/InsPossibleScenario.module.scss';

const InsPossibleScenario = props => {
    return (
        <div className={Classes.InsPossibleScenario}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Example scenario</h1>
                <p>Below is an example of a typical scenario that you might encounter during the experiment.</p>
                <br />
                <p><i>Example</i></p>
                <hr />
                <p>Avery, the owner of a small company is facing bankruptcy due to an unforeseen supply shortage of an ingredient 
                    required in the manufacturing process of their product. To prevent bankruptcy, the owner decides to <b>lower 
                    wages (for the time being).</b> </p>
                <hr />
                <br />
                <p>Would you say that Avery did right or wrong taking this decision, and how certain you are about your answer?</p>
                <div className={Classes.ImageContainer}>
                    <img src={businessmanImg} alt="businessman has headache" />
                </div>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsPossibleScenario;