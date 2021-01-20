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
                you can start your trip to the first space station. Good luck!<br /></p>
                <hr />
                <p>
                1. There are two planets, one planet is RED, and the other planet is BLUE. On the <b>RED PLANET</b>, fish are mainly <b>RED</b>.
                    On the <b>BLUE PLANET</b>, fish are mainly <b>BLUE</b>.<br></br><br></br>
                2. You will travel to five different space stations and decide whether a local fish supplier travelled to the red or blue planet to catch their fish.<br></br><br></br>
                3. On each space station, you first cook one fish by yourself and learn about the color of the fish. Additionally, <b>two crew members</b> cook one fish from the catch each.<br></br><br></br>
                4. You will communicate with the two crew members via their space headlights to learn which planet they believe the local fish supplier travelled.<br></br><br></br>
                5. The two crew members might talk to each other and influence their beliefs. Thus, you will observe their belief signals multiple times. Important: You do <b>not know</b> when the two crew members finish cooking their fish. Thus, you need to pay attention to both their beliefs and confidence when learning about their relationship. Also, be aware that their beliefs <b>might not</b> always be informative as they might sometimes signal a belief before they finished cooking the fish.<br></br><br></br>
                6. You will then provide a guess about the crew members' relationships with each other, and, under consideration of their beliefs, select the planet you think the local supplier travelled. Selecting the correct planet will ensure that you will give them the correct salt advice for as many fish as possible!<br></br><br></br>
                7. You will rate how confident you are in your selection.<br></br><br></br>
                
                </p>
                <br />
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsSummary;