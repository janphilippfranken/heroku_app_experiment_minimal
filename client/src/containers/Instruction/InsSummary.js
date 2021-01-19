import React from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instruction/InsSummary.module.scss';

const InsSummary = props => {

    return (
        <div className={Classes.InsSummary}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Summary</h1>
                <hr />
                <p>Well done! Below is a short summary of your task, and there will be a <b>comprehension quiz on the next page</b> after which
                you can start your trip to the first village. Good luck!<br /></p>
                <hr />
                <p>
                1. There are two planets, one planet is RED, and the other planet is BLUE. On the <b>RED PLANET</b>, fish are mainly <b>RED</b>.
                    On the <b>BLUE PLANET</b>, fish are mainly <b>BLUE</b>.<br></br><br></br>
                2. You will travel to four different villages and decide whether a local space fisherman travelled to the red or blue planet to catch their fish.<br></br><br></br>
                3. In each village, you buy one fish from a fisherman's catch. Additionally, <b>two villagers</b> buy one fish from the catch each.<br></br><br></br>
                4. You will talk to the two villagers to learn which planet they believe the fisherman travelled.<br></br><br></br>
                5. The two villagers might talk to each other and influence their beliefs. Thus, you will observe their beliefs multiple times. Important: You do <b>not know</b> when the two villagers cooked their fish. Thus, you need to pay attention to both their beliefs and confidence when learning about their relationship. Also, be aware that their beliefs <b>might not</b> always be informative as they might sometimes make a judgement before they finished cooking the fish.<br></br><br></br>
                6. You will then provide a guess about the villagers' relationships with each other, and, under consideration of their beliefs, select the planet you think the space fisherman travelled. You will also rate your confidence.<br></br><br></br>
                
                </p>
                <br />
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsSummary;