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
                you can start your trip to the first village. Good luck!<br /></p>
                <hr />
                <p>
                1. There are two planets, one planet is RED, and the other planet is BLUE. On the RED planet, 3/4 of the fish are RED, and 1/4 are BLUE. On the BLUE planet, 3/4 of the fish are BLUE, and 1/4 are RED.<br></br><br></br>
                2. You will travel to four different villages and decide whether a local space fisherman travelled to the red or blue planet to catch their fish.<br></br><br></br>
                4. Each fisherman gives you one fish from their catch. Additionally, they give one fish to each of two villagers.<br></br><br></br>
                5. You will will talk to the two villagers to learn which planet they believe the fisherman travelled.<br></br><br></br>
                5. The two villagers might talk to each other and influence their beliefs. Thus, you will observe their beliefs multiple times. Important: You do not know when the two villagers received their fish. Thus, you need to pay attention to both their beliefs and confidence when learning about their relationship.<br></br><br></br>
                6. You will provide a guess about their relationship and under condieration of their beliefs, select the planet the space fisherman travelled. You will also rate your confidence.<br></br><br></br>
                
                </p>
                <br />
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsSummary;