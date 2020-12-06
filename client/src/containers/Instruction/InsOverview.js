import React from 'react';

import Button from '../../components/Button/Button';
import planetImage from '../../static/images/planets.png';
import Classes from '../../SASS/containers/Instruction/InsOverview.module.scss';

const InsOverview = props => {

    return (
        <div className={Classes.InsOverview}>
            
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Overview</h1>
                <hr />           
                <div className={Classes.InsReminder}>
                    <p><i>*** Please read carefully. You will complete a comprehension quiz at the end. ***</i></p>
                   
                </div> 
                <p>Imagine there are two colored planets. One planet is red, and the other planet is blue. 
                    Both planets are inhabited by a strange space fish. On the red planet, 3/4 of the fish are red, 
                    and 1/4 is blue. On the blue planet, the proportions are reversed: 3/4 of the fish are blue, 
                    and 1/4 is red.</p>
                <hr />
                <img src={planetImage} alt="planets"/>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsOverview;