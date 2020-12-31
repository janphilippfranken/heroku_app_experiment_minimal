import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import relationshipImage from '../../static/images/select_relationship.png';
import planetImage from '../../static/images/select_planet.png';
import fishImage from '../../static/images/fish.png';
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
                    <p><i>*** Scroll through the division below to see details. ***</i></p>
                   
                </div> 
                <ScrollDivision scroll={showBtn}>
                <p>In each village, you first receive a fish from the fisherman:</p><br></br>
                <img src={fishImage} alt="planets"/><br></br><br></br>
                <p>You then observe the beliefs of villagers by clicking the ``<b>Observe Beliefs</b>'' button:</p><br></br>
                <img src={observeImage} alt="planets"/><br></br><br></br>
                <p>Beliefs of villagers can either be blue or red. In addition to their beliefs, villagers also tell you how confident they are in their beliefs on a <b>scale from 1-3</b>. Specifically, they can be 1: not confident; 2: slightly confident; or 4: confident. The <b>more confident</b> they are, the more likely they think the space fisherman travelled to the planet they selected. The confidence is displayed together with their beliefs:</p><br></br>
                <img src={confImage} alt="planets"/><br></br><br></br>
                <p>After observing the beliefs of villagers, you will provide a <b>guess about their relationship</b>:</p><br></br>
                <img src={relationshipImage} alt="planets"/><br></br><br></br>
                <p>Finally, you will be asked to select one of the two planets and rate <b>how confident</b> your are in your decision:</p>
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