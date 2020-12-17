import React from 'react';

import Button from '../../components/Button/Button';
import planetImage from '../../static/images/planets.png';
import Classes from '../../SASS/containers/Instruction/InsOverview.module.scss';

const InsOverview = props => {

    return (
        <div className={Classes.InsOverview}>
            
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Background</h1>
                <hr />           
                <div className={Classes.InsReminder}>
                    <p><i>*** Please read carefully. You will complete a comprehension quiz at the end. ***</i></p>
                   
                </div> 
                <p>Imagine there are two colored planets. One planet is <b>RED</b>, and the other planet is <b>BLUE</b>. 
                    Both planets are inhabited by a strange space fish. On the <b>RED planet</b>, 3/4 of the fish are RED, 
                    and 1/4 are BLUE. On the <b>BLUE planet</b> , the proportions are <b>reversed</b>: 3/4 of the fish are BLUE, 
                    and 1/4 are RED.</p>
                <hr />
                <img src={planetImage} alt="planets"/>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsOverview;