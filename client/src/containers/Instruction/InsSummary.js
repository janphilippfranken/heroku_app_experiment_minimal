import React from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instruction/InsSummary.module.scss';

const InsSummary = props => {

    return (
        <div className={Classes.InsSummary}>
            <div className={Classes.InnerContainer}>
                <h1>Summary</h1> 
                <hr />
                <p>
                1. On the <b>RED PLANET</b>, fish are mainly <b>RED</b>. On the <b>BLUE PLANET</b>, fish are mainly <b>BLUE</b>.<br></br><br></br>
                2. You will travel to five different space stations and decide whether a local fish supplier travelled to the RED or BLUE planet to catch their fish.<br></br><br></br>
                3. On each space station, you first cook one fish by yourself and learn about the color of the fish. Additionally, <b>two crew members</b> cook one fish from the catch each.<br></br><br></br>
                4. You will communicate with the two crew members via their space headlights to learn which planet they believe the local fish supplier travelled. Each crew member will communicate their belief <b>10 times</b>.<br></br><br></br>
                5. The two crew members might talk to each other and influence their beliefs.<br></br><br></br>
                6. You will provide a guess about the crew members' relationships with each other, and, under consideration of their beliefs, select the planet you think the local supplier travelled.<br></br><br></br>
                
                </p>
                <br />
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsSummary;