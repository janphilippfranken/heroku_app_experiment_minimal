import React from 'react';

import Button from '../../components/Button/Button';
import fishermanImage from '../../static/images/fisherman.png';
import Classes from '../../SASS/containers/Instruction/InsTask.module.scss';

const InsTask= props => {

    return (
        <div className={Classes.InsTask}>
            
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Overview</h1>
                <hr />           
                <div className={Classes.InsReminder}>
                    <p><i>*** Please read carefully. You will complete a comprehension quiz at the end. ***</i></p>
                   
                </div> 
                <p>You will be travelling to four different villages. In each village, there is a space fisherman that went to one of the two planets to catch fish. You <b>do not know</b> which planet the space fisherman travelled.</p><br></br>
                
                <p>Each space fisherman gives you <b>one fish</b> from their catch. Additionally, the space fisherman gives one fish to each of <b>two villagers</b>.</p><br></br>
                
                <p>In each village, your task is to <b>decide</b> whether the space fisherman travelled the RED or BLUE planet to catch their fish. You will be paid a bonus of 50cents for each correct selectsion (total bonus = 4 * 50cents = $2.00).</p><br></br>
                
                <p>You can make your decision based on consideirng...s.</p><br></br>
                <hr />
                <img src={fishermanImage} alt="planets"/>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsTask;