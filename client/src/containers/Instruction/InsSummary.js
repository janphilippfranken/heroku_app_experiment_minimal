import React from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instruction/InsSummary.module.scss';

const InsSummary = props => {

    return (
        <div className={Classes.InsSummary}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Summary</h1>
                <hr />
                <p>Well done! Below is a short summary of your task, and there will be a <b>comprehension quiz on the next page</b>, after which
                you can get to work. Good luck!<br /></p>
                <hr />
                <p>
                1. You will travel to four different villages.<br />
                2. Each village was supplied by a spacefisherman that travelled that travelled to a blue or red planet.<br />
                3. On the blue planet 3/4 of fish are blue and 1/4 is red. On the red planet, proportions are reversed.<br />
                4. For each village, you need to decide whether the fisherman travelled to the red or blue planet.<br />
                5. To make a decision, you will receive a fish from the fisherman's catch. You will also talk to two villagers and
                ask them about their beliefs about which planet the fisherman visited. <br />
                6. Be careful, the villagers might talk to each other and influence their beliefs. You will ask them multiple times to make
                sure you learn about any potential influences they have on each other.<br />
                7. Before selecting which planet they travelled to, you also need to tell about the relationship between villagers.<br />
                </p>
                <br />
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsSummary;