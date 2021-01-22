import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import relationshipImage from '../../static/images/select_relationship.png';
import planetImage from '../../static/images/select_planet.png';
import fishImage from '../../static/images/fish_instruct.png';
import vunconfidentImage from '../../static/images/vunconfident.png';
import confidentImage from '../../static/images/confident.png';
import vconfidentImage from '../../static/images/vconfident.png';
import observeImage from '../../static/images/observe_beliefs.png';
import confImage from '../../static/images/confidence_meaning.png';
import confMeaningImage from '../../static/images/belief_meaning.png';
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
                <h1>Procedure</h1>
                <hr />           
                <ScrollDivision scroll={showBtn}>
                <p>On each space station, you first cook one fish and observe the color (example below).</p><br></br>
                <img src={fishImage} alt="planets"/><br></br><br></br>
                <p>You then observe the belief signals of the two crew members by clicking the `<b>Observe</b>' button:</p><br></br>
                <img src={observeImage} alt="planets"/><br></br><br></br>
                <p>Using their space headlights, crew members can either signal a blue belief (supplier travelled to the BLUE Planet) or red belief (supplier travelled to the RED Planet). In addition to their beliefs, crew members also signal you how confident they are in their beliefs on a <b>scale from 1 (very unconfident) - 3 (very confident)</b>. The <b>more confident</b> they are, the more likely they think the local supplier travelled the selected planet. A crew member's confidence corresponds to the three brightness settings of their space headlights:</p><br></br>
                <img src={confImage} alt="planets"/><br></br><br></br>
                {/* <p>The illustration below further shows how the crew uses their space headlights to communicate their beliefs:</p><br></br>
                <img src={confMeaningImage} alt="planets"/><br></br><br></br> */}


                <p>Before finishing cooking their fish and observing its color (and without hearing about the other crew member's belief) a crew member will be very unconfident:</p><br></br>
                <img src={vunconfidentImage} alt="planets"/><br></br><br></br>

                <p>After a crew member finished cooking their fish and hence observed the fish's color, their confidence increases:</p><br></br>
                <img src={confidentImage} alt="planets"/><br></br><br></br>

                <p>A crew member can also be influenced by the other crew member. If the influencing crew member has the same belief, this can further increase the confidence of the influenced crew member:</p><br></br>
                <img src={vconfidentImage} alt="planets"/><br></br><br></br>

                <p>Note: When beliefs are different, one crew member can decrease the confidence of the other crew member or even change their belief entirely.</p><br></br> 

                {/* <p>From prior experience, you know that crew members are less influenced by each other's beliefs compared to directly observing the color of a fish. For example, being influenced by a crew member that finished cooking their fish (and has not been influenced by anyone else) has around 1/4 of the impact on another crew member's belief as compared to directly observing a fish's color.</p><br></br> */}
                
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