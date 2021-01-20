import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import relationshipImage from '../../static/images/select_relationship.png';
import planetImage from '../../static/images/select_planet.png';
import fishImage from '../../static/images/fish_instruct.png';
import observeImage from '../../static/images/observe_beliefs.png';
import confImage from '../../static/images/confidence_meaning.png';
import Classes from '../../SASS/containers/Instruction/InsTask2.module.scss';
import ScrollDivision from '../../components/ScrollDivision/ScrollDivision';

const InsTask= props => {
    const [btnDisplay, setBtnDisplay] = useState(false)

    const showBtn = (e) => {
        debugger;
        console.log(e.target.scrollHeight);
        console.log(e.target.scrollTop);
        if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight) {
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
                    <p><i>*** Scroll through the division below to see details. ***</i></p>
                </div> 
                <ScrollDivision scroll={showBtn}>
                <p>On each space station, you first cook one fish and observe the color (example below).</p><br></br>
                <img src={fishImage} alt="planets"/><br></br><br></br>
                <p>You then observe the beliefs of the two crew members by clicking the ``<b>Observe Beliefs</b>'' button:</p><br></br>
                <img src={observeImage} alt="planets"/><br></br><br></br>
                <p>Using their space headlights, crew members can either signal blue or red beliefs. In addition to their beliefs, crew members also signal you how confident they are in their beliefs on a <b>scale from 1 (very unconfident) - 3 (very confident)</b>. The <b>more confident</b> they are, the more likely they think the space fisherman travelled the selected planet. A crew member's confidence corresponds to the three brightness settings of their space headlights:</p><br></br>
                <img src={confImage} alt="planets"/><br></br><br></br>
                <p>After observing beliefs and confidence of crew members, you will provide a <b>guess about their relationship</b> and receive a bonus of £0.25 for each correct selection:</p><br></br>
                <img src={relationshipImage} alt="planets"/><br></br><br></br>
                <p>Finally, you will be asked to select one of the two planets and rate <b>how confident</b> you are in your decision (again, receiving a bonus of £0.25 for each correct selection):</p>
                <img src={planetImage} alt="planets"/>
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
                {/* {btnDisplay && <Button clicked={props.goToInstruction}>Next</Button>} */}
                </ScrollDivision >
              
                {/* {btnDisplay ? <Button clicked={props.goToInstruction}>Next</Button>: <Button >Please scroll down</Button>} */}
            </div>
        </div>
    );
};

export default InsTask;