import React from 'react';

import Button from '../../components/Button/Button';
import fishermanImage from '../../static/images/fisherman.png';
import Classes from '../../SASS/containers/Instruction/InsTask.module.scss';

const InsTask= props => {

    return (
        <div className={Classes.InsTask}>
            
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Task</h1>
                <hr />           
                <div className={Classes.InsReminder}>
                    <p><i>*** Please read carefully. You will complete a comprehension quiz at the end. ***</i></p>
                   
                </div> 
                <p>You will be travelling to four different villages. In each village, there is a space fisherman that went to one of the two planets to catch fish. You <b>do not know</b> which planet the space fisherman travelled.</p><br></br>
                
                <p>Your task is to <b>decide</b> whether the space fisherman travelled the RED or BLUE planet to catch their fish. You will be paid a bonus of 50 cent each time you selected the correct planet that was visited by a village's space fisherman (total bonus = 4 * 50 cent = $2.00).</p><br></br>

                <p>In each village, the local space fisherman gives you <b>one fish</b> from their catch. Additionally, the space fisherman gives <b>one fish</b> to each of <b>two villagers</b>. You <b>do not know</b> the color of these.</p><br></br>

                <p><b>Before</b> selecting a planet, you will will talk to the two villagers to learn which planet <b>they believe</b> the fisherman travelled and how <b>confident</b> they are in their beliefs.</p><br></br>
                
                <p><b>Important:</b> The two villagers might <b>talk to each other</b> and <b>influenced</b> their beliefs. Thus, you will observe their beliefs <b>multiple times</b> to find out about their relationships with each other.</p><br></br>

                <p><b>Important:</b> You <b>do not</b> know when the two villagers received their fish. Therefore, pay careful attention to both their <b>beliefs and confidence</b> when finding out about their relationships with each other.</p><br></br>
               
                <hr />
                <img src={fishermanImage} alt="planets"/>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsTask;