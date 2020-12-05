import React from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instructions/InsSummary.module.scss';

const InsSummary = props => {

    return (
        <div className={Classes.InsSummary}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Summary</h1>
                <hr />
                <p>Well done! Below is a short summary of your training, and there will be a <b>comprehension quiz on the next page</b>, after which
                you can get to work. Good luck!<br /></p>
                <hr />
                <p>
                1.  You are presented with a <b>fictional scenario</b> involving a number of characters.  <br />
                2.	You are asked to <b>carefully</b> read the scenario and provide your <b>initial judgment</b> on whether or not the act
                of the main character involved in the scenario is <b>ethical or unethical. </b> <br />
                3.  After providing your initial judgment, you will be exposed and learn about the beliefs of <b>two of your neighbours</b> who,
                you can assume, are living in the same city as you do. The information provided by these locals is very valuable to you as
                they actually know the motives behind the decision of the main character. <br />
                4.	You will be able to revise your belief and certainty ratings after being exposed to the locals' beliefs. This will help you
                improve the quality of your advice.</p>
                <br />
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsSummary;