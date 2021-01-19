import React from 'react';

import Button from '../../components/Button/Button';
import villagersImage from '../../static/images/villagers.png';
import visitImage from '../../static/images/planet_visit.png';
import subjCookImage from '../../static/images/subj_cooking.png';
import Classes from '../../SASS/containers/Instruction/InsTask.module.scss';
import ScrollDivision from '../../components/ScrollDivision/ScrollDivision';

const InsTask= props => {

    return (
        <div className={Classes.InsTask}>
            
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Task</h1>
                <hr />           
                <div className={Classes.InsReminder}>
                    <p><i>*** Scroll through the division below to see details. ***</i></p>
                   
                </div> 
                <ScrollDivision>
                <p>You will be travelling to four different villages. In each village, a local space fisherman returned from <b>one</b> of the two planets with a catch of fish. You <b>do not know</b> which planet the space fisherman travelled.</p><br></br>

                <img src={visitImage} alt="planet_visit"/>
                
                <p>Your task is to <b>decide</b> whether the space fisherman travelled the RED or BLUE planet to catch their fish. You will be paid a bonus of £0.25 each time you selected the correct planet (max. bonus = 4 * £0.25 cent = £1.00).</p><br></br>

                <p>In each village, you first buy <b>one fish</b> from the space fisherman's catch. You then cook the fish to figure out the color.</p><br></br>  
                
                <img src={subjCookImage} alt="subj_cooking"/>

                <p>Additionally, <b>two villagers</b> buy one fish from the catch each. They also cook their fish and learn about the color of the fish. You do <b>not</b> know the color(s) of their fish.</p><br></br>

                <p><b>Before</b> selecting a planet, you will will talk to the two villagers to learn which planet <b>they believe</b> the fisherman travelled and how <b>confident</b> they are in their beliefs.</p><br></br>
                
                <img src={villagersImage} alt="villagers_cooking"/>

                <p><b>Important:</b> The two might <b>talk to each other</b> and <b>influence</b> their beliefs. Thus, you will observe their beliefs <b>multiple times</b> and provide a guess about their relationships with each other. You will be paid an additional £0.25 each time you selected the correct relationship (max. bonus = 4 * £0.25 cent = £1.00).</p><br></br>

                <p><b>Important:</b> You <b>do not</b> know <b>when</b> the two villagers cook their fish and learn about the color of the fish. Therefore, you need to pay careful attention to both their <b>beliefs and confidence</b> when finding out about their relationships with each other. Also, be aware that their beliefs <b>might not</b> always be informative as you might sometimes ask them for a judgement before they finished cooking their fish.</p><br></br>
               
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
                </ScrollDivision >
            </div>
        </div>
    );
};

export default InsTask;