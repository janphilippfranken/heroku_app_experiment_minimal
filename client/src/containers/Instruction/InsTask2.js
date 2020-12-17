import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import relationshipImage from '../../static/images/select_relationship.png';
import planetImage from '../../static/images/select_planet.png';
import fishImage from '../../static/images/fish.png';
import observeImage from '../../static/images/observe_beliefs.png';
import Classes from '../../SASS/containers/Instruction/InsTask2.module.scss';
import ScrollDivision from '../../components/ScrollDivision/ScrollDivision';

const InsTask= props => {
    const [btnDisplay, setBtnDisplay] = useState(false)

    const showBtn = (e) => {
        debugger;
        console.log(e.target.scrollHeight);
        console.log(e.target.scrollTop);
        if (e.target.scrollTop > 1650) {
            setBtnDisplay(true);
        }
    };

    return (
        <div className={Classes.InsTask}>
            
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Procedure</h1>
                <hr />           
                <div className={Classes.InsReminder}>
                    <p><i>*** Please read carefully. You will complete a comprehension quiz at the end. ***</i></p>
                   
                </div> 
                <ScrollDivision scroll={showBtn}>
                <p>In each village, you first receive a fish from the fisherman (scroll down):</p><br></br>
                <img src={fishImage} alt="planets"/><br></br><br></br>
                <p>You then observe the beliefs of villagers by clicking the ``<b>Observe Beliefs</b>'' button:</p><br></br>
                <img src={observeImage} alt="planets"/><br></br><br></br>
                <p>After observing the beliefs of villagers, you will provide a <b>guess about their relationship</b>:</p><br></br>
                <img src={relationshipImage} alt="planets"/><br></br><br></br>
                <p>Finally, you will be asked to select one of the two planets and rate <b>how confident</b> your are in your decision:</p>
                <img src={planetImage} alt="planets"/>
                </ScrollDivision >
                <hr />
                {btnDisplay && <Button clicked={props.goToInstruction}>Next</Button>}
            </div>
        </div>
    );
};

export default InsTask;