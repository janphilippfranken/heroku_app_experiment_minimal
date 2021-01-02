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
                <p>You will be travelling to four different villages. In each village, there is a space fisherman that went to <b>one</b> of the two planets to catch fish. You <b>do not know</b> which planet the space fisherman travelled.</p><br></br>
                
                <p>Your task is to <b>decide</b> whether the space fisherman travelled the RED or BLUE planet to catch their fish. You will be paid a bonus of £0.25 each time you selected the correct planet (max. bonus = 4 * £0.25 cent = £1.00).</p><br></br>

                <p>In each village, the local space fisherman gives you <b>one fish</b> from their catch. Additionally, the space fisherman gives <b>one fish</b> to each of <b>two villagers</b>. You <b>do not know</b> the color of their fish.</p><br></br>

                <p><b>Before</b> selecting a planet, you will will talk to the two villagers to learn which planet <b>they believe</b> the fisherman travelled and how <b>confident</b> they are in their beliefs.</p><br></br>
                
                <p><b>Important:</b> The two villagers might <b>talk to each other</b> and <b>influence</b> their beliefs. Thus, you will observe their beliefs <b>multiple times</b> and provide a guess about their relationships with each other. You will be paid an additional £0.25 each time you selected the correct relationship (max. bonus = 4 £0.25 cent = £1.00).</p><br></br>

                <p><b>Important:</b> You <b>do not</b> know <b>when</b> the two villagers received their fish. Therefore, you need to pay careful attention to both their <b>beliefs and confidence</b> when finding out about their relationships with each other. Also, be aware that their beliefs <b>might not</b> always be informative as they are sometimes forced to make a judgement before having received a fish from the fisherman.</p><br></br>
               
                <hr />
                <img src={fishermanImage} alt="planets"/>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsTask;