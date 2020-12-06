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
                <p>One day, a space fisherman travels to one of the two planets and catches all fish. 
                    Upon arrival on earth, the fisherman gives one randomly selected fish from their catch to each of 
                    your friends Tia and Chris.</p>
                <hr />
                <img src={fishermanImage} alt="planets"/>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsTask;